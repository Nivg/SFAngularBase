/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {AccountComponent} from "./account.component";

export class AccountEditComponent
{
    isActive: boolean;
    accountCtrl: AccountComponent;
    account: any;

    $onInit()
    {
        this.accountCtrl.addAccountEdit(this);
        this.account = this.accountCtrl.getAccount();
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
        templateUrl: 'app/account/accountEdit.html'
    };