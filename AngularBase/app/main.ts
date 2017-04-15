/**
 * Created by N.G on 15/04/2017.
 */
import IAngularStatic = angular.IAngularStatic;
import {appModule} from "./app.module";
declare const angular: IAngularStatic;

angular.bootstrap(document, [
    appModule.name
]);