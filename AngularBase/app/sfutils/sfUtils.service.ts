/**
 * Created by N.G on 16/04/2017.
 */
import IQService = angular.IQService;
declare const Visualforce: any;

export class SFUtilsService
{
    constructor(private $q: IQService){}

    sfRemote(name, arg)
    {
        var deffered = this.$q.defer();

        Visualforce.remoting.Manager.invokeAction(name, arg,
            function (result, event)
            {
                if (event.status)
                {
                    deffered.resolve(result);
                }
                else
                {
                    deffered.reject(event);
                }
            },
            {buffer: true, escape: false}
        );
        return deffered.promise;
    }
}