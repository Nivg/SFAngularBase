/**
 * Created by N.G on 15/04/2017.
 */
import IAngularStatic = angular.IAngularStatic;
import {appComponent} from "./app.component";
import {AccountModule} from "./account/account.module";
import {SFUtilsService} from "./sfutils/sfUtils.service";
declare const angular: IAngularStatic;

export const appModule = angular
    .module('app.module', [
        'cgBusy',
        AccountModule.name
    ])
    .component('myApp', appComponent)
    .service('sfUtilsService', SFUtilsService)
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true, //https://github.com/angular/angular.js/issues/7239
            requireBase: false,
            rewriteLinks: false //http://stackoverflow.com/questions/16837704/angularjs-normal-links-with-html5mode
        });
    });