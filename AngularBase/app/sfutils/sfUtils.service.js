"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SFUtilsService = (function () {
    function SFUtilsService($q) {
        this.$q = $q;
    }
    SFUtilsService.prototype.sfRemote = function (name, arg) {
        var deffered = this.$q.defer();
        Visualforce.remoting.Manager.invokeAction(name, arg, function (result, event) {
            if (event.status) {
                deffered.resolve(result);
            }
            else {
                deffered.reject(event);
            }
        }, { buffer: true, escape: false });
        return deffered.promise;
    };
    return SFUtilsService;
}());
exports.SFUtilsService = SFUtilsService;
//# sourceMappingURL=sfUtils.service.js.map