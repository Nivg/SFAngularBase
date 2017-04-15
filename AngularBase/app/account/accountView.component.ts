/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {AccountComponent} from "./account.component";

export class AccountViewComponent
{
    isActive: boolean;
    accountCtrl: AccountComponent;
    account: any;

    $onInit()
    {
        this.accountCtrl.addAccountView(this);
        this.account = this.accountCtrl.getAccount();
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
        templateUrl: 'app/account/accountView.html'
    };