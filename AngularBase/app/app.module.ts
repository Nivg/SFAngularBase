/**
 * Created by N.G on 15/04/2017.
 */
import IAngularStatic = angular.IAngularStatic;
import {appComponent} from "./app.component";
import {accountModule} from "./account/account.module";
import {SFUtilsSelectorService} from "./sfutils/sfUtilsSelector.service";
import {SFUtilsServer} from "./sfutils/sfUtilsServer.server";
import {SFUtilsMock} from "./sfutils/sfUtilsMock.service";
import {recordsTableModule} from "./recordsTable/recordsTable.module";
declare const angular: IAngularStatic;

export const appModule = angular
    .module('appModule', [
        'cgBusy', //https://github.com/cgross/angular-busy/blob/master/README.md
        accountModule.name,
        recordsTableModule.name
    ])
    .value('cgBusyDefaults',{
        templateUrl: SFUtilsSelectorService.buildTemplateURL('app/spinner/customSpinner.html')
    })
    .component('myApp', appComponent)
    .service('sfUtilsServiceSelector', SFUtilsSelectorService)
    .service('sfServer', SFUtilsServer)
    .service('sfMock', SFUtilsMock)
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true, //https://github.com/angular/angular.js/issues/7239
            requireBase: false,
            rewriteLinks: false //http://stackoverflow.com/questions/16837704/angularjs-normal-links-with-html5mode
        });
    });