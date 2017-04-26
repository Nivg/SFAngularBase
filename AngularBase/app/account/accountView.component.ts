/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import IScope = angular.IScope;
import {AccountComponent} from "./account.component";
import {SFUtilsSelectorService} from "../sfutils/sfUtilsSelector.service";

export class AccountViewComponent
{
    isActive: boolean;
    accountCtrl: AccountComponent;

    $onInit()
    {
        this.accountCtrl.addAccountView(this);
        this.isActive = true;
    }
}

export const accountViewComponent: IComponentOptions =
    {
        controller: AccountViewComponent,
        bindings:{
            isActive: '<'
        },
        require: { accountCtrl: '^?account'},
        templateUrl: SFUtilsSelectorService.buildTemplateURL('app/account/accountView.html')
    };