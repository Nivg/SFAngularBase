/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {AccountComponent} from "./account.component";

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
        templateUrl: function() {return location.hostname === "localhost" ? 'app/account/accountView.html' : 'accountView.html';}
    };