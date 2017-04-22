/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {SFUtilsSelectorService} from "./sfutils/sfUtilsSelector.service";

class AppComponent
{
    cmpName: string = 'AppComponent';
}

export const appComponent: IComponentOptions =
    {
        controller: AppComponent,
        templateUrl: SFUtilsSelectorService.buildTemplateURL('app/app.html')
    };