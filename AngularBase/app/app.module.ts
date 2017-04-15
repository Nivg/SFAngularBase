/**
 * Created by N.G on 15/04/2017.
 */
import IAngularStatic = angular.IAngularStatic;
import {appComponent} from "./app.component";
import {AccountModule} from "./account/account.module";
declare const angular: IAngularStatic;

export const appModule = angular
    .module('app.module', [
        AccountModule.name
    ])
    .component('myApp', appComponent);