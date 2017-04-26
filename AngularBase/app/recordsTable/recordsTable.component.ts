/**
 * Created by N.G on 24/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;
import {SFUtilsSelectorService} from "../sfutils/sfUtilsSelector.service";

class RecordsTableComponent
{
    headers: string[];
    fields: string[];
    title: string;
    data: any;

    constructor()
    {
        //Sample data:
        //this.data = [{Name: 'test1', Title: 'test2', Company: 'test6'}, {Name: 'test3', Title: 'test4', Company: 'test7'}];
    }

    $onInit()
    {
        //debugger;
        //bindings variable are available in this stage:
    }
}

export const recordsTableComponent: IComponentOptions =
    {
        controller: RecordsTableComponent,
        bindings:{
            title:      '@',
            headers:    '<',
            fields:     '<',
            data:       '<'
        },
        templateUrl: SFUtilsSelectorService.buildTemplateURL('app/recordsTable/recordsTable.html')
    };



