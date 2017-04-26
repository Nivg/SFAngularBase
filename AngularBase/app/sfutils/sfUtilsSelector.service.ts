/**
 * Created by N.G on 22/04/2017.
 */
import {SFUtilsServer} from "./sfUtilsServer.server"
import {SFUtilsMock} from "./sfUtilsMock.service"

export class SFUtilsSelectorService
{
    constructor(private sfServer: SFUtilsServer, private sfMock: SFUtilsMock){}

    sfRemote(name, arg)
    {
        return SFUtilsSelectorService.isLocal() ? this.sfMock.sfRemote(name, arg) : this.sfServer.sfRemote(name, arg);
    }

    public static isLocal()
    {
        return location.hostname === "localhost";
    }

    public static buildTemplateURL(url)
    {
        let relevantURL = url;
        if(!SFUtilsSelectorService.isLocal() && url)
        {
            relevantURL = url.split(/[// ]+/).pop();
        }
        return relevantURL;
    }
}