/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import ILocationService = angular.ILocationService;
import IScope = angular.IScope;
import {AccountService} from "./account.service";
import {AccountViewComponent} from "./accountView.component";
import {AccountEditComponent} from "./accountEdit.component";
import {SFUtilsSelectorService} from "../sfutils/sfUtilsSelector.service";

export class AccountComponent
{
    viewAccountModel: any;
    editAccountModel: any;
    accountView: AccountViewComponent;
    accountEdit: AccountEditComponent;

    constructor(private $location: ILocationService, private accountService: AccountService, private $scope:IScope)
    {
        this.loadViewAccount();
    }

    loadViewAccount()
    {
        this.$scope.viewPromise = this.getAccount(this.$location.search())
            .then(account => {
                this.viewAccountModel = account
                this.editAccountModel = null;
            });
    }

    loadEditAccount()
    {
        this.$scope.editPromise = this.getAccount(this.$location.search())
            .then(account => {
                this.editAccountModel = account
                this.viewAccountModel = null;
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
        this.loadEditAccount();
    }

    cancelEditAccount()
    {
        this.accountEdit.isActive = false;
        this.accountView.isActive = true;
        this.loadViewAccount();
    }

    saveAccount(isValid: boolean)
    {
        if(isValid)
        {
            this.$scope.editPromise = this.accountService.saveAccount(this.editAccountModel).then(result => {
                    if(result.Status === 'Success')
                    {
                        this.accountEdit.isActive = false;
                        this.accountView.isActive = true;
                        this.loadViewAccount();
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
        templateUrl: SFUtilsSelectorService.buildTemplateURL('app/account/account.html')
    };