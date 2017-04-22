/**
 * Created by N.G on 22/04/2017.
 */
import IQService = angular.IQService;
import {SFUtilsService} from "./sfUtils.service"
declare const Visualforce: any;

export class SFUtilsServer extends SFUtilsService
{
    constructor(private $q: IQService)
    {
        super();
    }

    sfRemote(name, arg): any
    {
        return this.$q(function (resolve, reject)
        {
            Visualforce.remoting.Manager.invokeAction(name, arg,
                function (result, event)
                {
                    if (event.status)
                    {
                        resolve(result);
                    }
                    else
                    {
                        reject(event);
                    }
                },
                {buffer: true, escape: false}
            );
        });
    }
}