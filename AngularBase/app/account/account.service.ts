/**
 * Created by N.G on 15/04/2017.
 */
import IQService = angular.IQService;
import {AccountModel} from "./account.model"

export class AccountService
{
    constructor(private $q: IQService){}

    getAccount()
    {
        let p = new Promise((resolve, reject) =>
        {
            resolve(new AccountModel('Acc1', '054-9914567', 'Other', 'Acc1.com'));
        });

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