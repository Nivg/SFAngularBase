/**
 * Created by N.G on 22/04/2017.
 */
import ITimeoutService = angular.ITimeoutService;
import {SFUtilsService} from "./sfUtils.service"

export class SFUtilsMock extends SFUtilsService
{
    constructor(private $timeout: ITimeoutService)
    {
        super();
    }

    sfRemote(name, arg): any
    {
        let answer;

        switch (name)
        {
            case SFUtilsService.FUNCTIONS_NAME_MAP.getAccount :
            {
                answer = this.$timeout(function ()
                {
                    return {Id: arg.Id, Name: 'Acc1', Phone: '054-9914567', Type: 'Other', Website: 'Acc1.com'};
                }, 2000);
                break;
            }
            case SFUtilsService.FUNCTIONS_NAME_MAP.saveAccount :
            {
                answer = this.$timeout(function ()
                {
                    let saveAccountAns;
                    if (arg)
                    {
                        saveAccountAns = {Status: 'Success', Message : ''};
                    }
                    else
                    {
                        saveAccountAns = {Status: 'Error', Message : 'Save Account Error'};
                    }
                    return saveAccountAns;
                }, 3000);
                break;
            }
            case SFUtilsService.FUNCTIONS_NAME_MAP.getContacts :
            {
                answer = this.$timeout(function ()
                {
                    return {Contacts:[{Email: 'jrogers@burlington.com', Id: 'c123456788',  Name: 'Jack Rogers', Title: 'VP, Facilities'}
                                     ,{Email: 'jrogers1@burlington.com', Id: 'c123456785',  Name: 'Jack1 Rogers1', Title: 'VP1, Facilities1'}],
                            Id: 'a12345678', Status: 'Success'};
                }, 4000);
                break;
            }
            default:
            {
                answer = this.$timeout(function ()
                {
                    return {'Status': 'Error', 'Message' : 'No function name provided.'};
                }, 100);
            }
        }

        return answer;
    }
}