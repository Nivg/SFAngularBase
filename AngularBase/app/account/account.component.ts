/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {AccountService} from "./account.service";
import {AccountViewComponent} from "./accountView.component";
import {AccountEditComponent} from "./accountEdit.component";

export class AccountComponent
{
    account: any;
    accountView: AccountViewComponent;
    accountEdit: AccountEditComponent;

    constructor(private accountService: AccountService)
    {
        this.loadAccount();
    }

    loadAccount()
    {
        this.accountService
            .getAccount()
            .then(account => {
                //debugger;
                this.account = account
            });
    }

    getAccount()
    {
        return this.account;
    }

    addAccountView(accountView: AccountViewComponent)
    {
        this.accountView = accountView;
    }

    addAccountEdit(accountEdit: AccountEditComponent)
    {
        this.accountEdit = accountEdit;
    }

    editAccount()
    {
        this.accountEdit.isActive = true;
        this.accountView.isActive = false;
    }

    cancelEditAccount()
    {
        this.accountEdit.isActive = false;
        this.accountView.isActive = true;
    }

    saveAccount(isValid: boolean)
    {
        console.log('isValidForm::' + isValid);
        if(isValid)
        {
            this.accountEdit.isActive = false;
            this.accountView.isActive = true;
        }
    }
}

export const accountComponent: IComponentOptions =
    {
        controller: AccountComponent,
        templateUrl: 'app/account/account.html'
    };