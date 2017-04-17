/**
 * Created by N.G on 15/04/2017.
 */
import IQService = angular.IQService;
import {AccountModel} from "./account.model"
import {SFUtilsService} from "../sfutils/sfUtils.service";

export class AccountService
{
    constructor(private $q: IQService, private sfUtilsService: SFUtilsService){}

    getAccount(arg)
    {
        let p;
        //For local testing::
        if(location.hostname === "localhost")
        {
            p = new Promise((resolve, reject) =>
            {
                setTimeout(function()
                {
                    resolve(new AccountModel(arg.Id, 'Acc1', '054-9914567', 'Other', 'Acc1.com'));
                }, 1000);
            });
        }
        else
        {
            p = this.sfUtilsService.sfRemote('CustomAccountLayout_CTRL.getAccount', arg);//For server.
        }

        return this.$q.when(p).then(// Log the fulfillment value
            function(val: any)
            {
                return val;
            })
            .catch(
                // Log the rejection reason
                (reason) => {
                    console.log('Handle rejected promise ('+reason+') here.');
                });
    }

    saveAccount(arg)
    {
        let p;
        //For local testing::
        if(location.hostname === "localhost")
        {
            p = new Promise((resolve, reject) =>
            {
                resolve({'Status': 'Success', 'Message' : ''});
            });
        }
        else
        {
            p = this.sfUtilsService.sfRemote('CustomAccountLayout_CTRL.saveAccount', arg);//For server.
        }

        return this.$q.when(p).then(// Log the fulfillment value
            function(val: any)
            {
                return val;
            })
            .catch(
                // Log the rejection reason
                (reason) => {
                    console.log('Handle rejected promise ('+reason+') here.');
                });
    }
}