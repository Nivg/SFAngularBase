/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import ILocationService = angular.ILocationService;
import IScope = angular.IScope;
import {AccountService} from "./account.service";
import {AccountViewComponent} from "./accountView.component";
import {AccountEditComponent} from "./accountEdit.component";

export class AccountComponent
{
    account: any;
    accountView: AccountViewComponent;
    accountEdit: AccountEditComponent;

    constructor(private $location: ILocationService, private accountService: AccountService, private $scope:IScope)
    {
        this.loadAccount();
    }

    loadAccount()
    {
        this.$scope.myPromise = this.getAccount(this.$location.search())
            .then(account => {
                this.account = account
            });
    }

    getAccount(arg)
    {
        return this.accountService.getAccount(arg);
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
        this.loadAccount();
    }

    cancelEditAccount()
    {
        this.accountEdit.isActive = false;
        this.accountView.isActive = true;
        this.loadAccount();
    }

    saveAccount(isValid: boolean)
    {
        if(isValid)
        {
            this.$scope.myPromise = this.accountService.saveAccount(this.account).then(result => {
                    if(result.Status === 'Success')
                    {
                        this.accountEdit.isActive = false;
                        this.accountView.isActive = true;
                        this.loadAccount();
                    }
                    else
                    {
                        //show error message...
                        console.log('ERROR::' + result.Message);
                    }
                });
        }
    }
}

export const accountComponent: IComponentOptions =
    {
        controller: AccountComponent,
        templateUrl: function() {return location.hostname === "localhost" ? 'app/account/account.html' : 'account.html';}
    };