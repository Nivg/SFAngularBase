/**
 * Created by N.G on 15/04/2017.
 */
import IComponentOptions = angular.IComponentOptions;

class AppComponent
{
    cmpName: string = 'AppComponent';
}

export const appComponent: IComponentOptions =
    {
        controller: AppComponent,
        templateUrl: function() {return location.hostname === "localhost" ? 'app/app.html' : 'app.html';}
    };