/**
 * Created by N.G on 16/04/2017.
 */

export abstract class SFUtilsService
{
    public static readonly FUNCTIONS_NAME_MAP =
    {
        'getAccount' : 'CustomAccountLayout_CTRL.getAccount',
        'saveAccount' : 'CustomAccountLayout_CTRL.saveAccount'
    };

    abstract sfRemote(name, arg): any;
}