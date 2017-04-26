/**
 * Created by N.G on 24/04/2017.
 */
import IModule = angular.IModule;
import IAngularStatic = angular.IAngularStatic;
import {recordsTableComponent} from "./recordsTable.component";
declare const angular: IAngularStatic;

export const recordsTableModule: IModule = angular
    .module('recordsTableModule', [])
    .component('recordsTable', recordsTableComponent);