/**
 * Created by N.G on 15/04/2017.
 */
import {SFUtilsSelectorService} from "../sfutils/sfUtilsSelector.service";
import {SFUtilsService} from "../sfutils/sfUtils.service";

export class AccountService
{
    constructor(private sfUtilsServiceSelector: SFUtilsSelectorService){}

    getAccount(arg)
    {
        return this.sfUtilsServiceSelector.sfRemote(SFUtilsService.FUNCTIONS_NAME_MAP.getAccount, arg);
    }

    saveAccount(arg)
    {
        return this.sfUtilsServiceSelector.sfRemote(SFUtilsService.FUNCTIONS_NAME_MAP.saveAccount, arg);
    }
}