/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {AccountComponent} from "./account.component";
import {SFUtilsSelectorService} from "../sfutils/sfUtilsSelector.service";

export class AccountEditComponent
{
    isActive: boolean;
    accountCtrl: AccountComponent;

    $onInit()
    {
        this.accountCtrl.addAccountEdit(this);
        this.isActive = false;
    }
}

export const accountEditComponent: IComponentOptions =
    {
        controller: AccountEditComponent,
        bindings:{
            isActive: '<'
        },
        require: { accountCtrl: '^?account'},
        templateUrl: SFUtilsSelectorService.buildTemplateURL('app/account/accountEdit.html')
    };