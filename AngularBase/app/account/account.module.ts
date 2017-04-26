/**
 * Created by N.G on 15/04/2017.
 */
import IModule = angular.IModule;
import IAngularStatic = angular.IAngularStatic;
import {accountComponent} from "./account.component";
import {AccountService} from "./account.service";
import {accountViewComponent} from "./accountView.component";
import {accountEditComponent} from "./accountEdit.component";

declare const angular: IAngularStatic;

export const accountModule: IModule = angular
    .module('accountModule', [])
    .component('account', accountComponent)
    .component('accountView', accountViewComponent)
    .component('accountEdit', accountEditComponent)
    .service('accountService', AccountService);