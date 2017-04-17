/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = __webpack_require__(7);
var account_module_1 = __webpack_require__(3);
var sfUtils_service_1 = __webpack_require__(9);
exports.appModule = angular
    .module('app.module', [
    'cgBusy',
    account_module_1.AccountModule.name
])
    .component('myApp', app_component_1.appComponent)
    .service('sfUtilsService', sfUtils_service_1.SFUtilsService)
    .config(function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false //http://stackoverflow.com/questions/16837704/angularjs-normal-links-with-html5mode
    });
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountComponent = (function () {
    function AccountComponent($location, accountService, $scope) {
        this.$location = $location;
        this.accountService = accountService;
        this.$scope = $scope;
        this.loadAccount();
    }
    AccountComponent.prototype.loadAccount = function () {
        var _this = this;
        this.$scope.myPromise = this.getAccount(this.$location.search())
            .then(function (account) {
            _this.account = account;
        });
    };
    AccountComponent.prototype.getAccount = function (arg) {
        return this.accountService.getAccount(arg);
    };
    AccountComponent.prototype.addAccountView = function (accountView) {
        this.accountView = accountView;
    };
    AccountComponent.prototype.addAccountEdit = function (accountEdit) {
        this.accountEdit = accountEdit;
    };
    AccountComponent.prototype.editAccount = function () {
        this.accountEdit.isActive = true;
        this.accountView.isActive = false;
        this.loadAccount();
    };
    AccountComponent.prototype.cancelEditAccount = function () {
        this.accountEdit.isActive = false;
        this.accountView.isActive = true;
        this.loadAccount();
    };
    AccountComponent.prototype.saveAccount = function (isValid) {
        var _this = this;
        if (isValid) {
            this.$scope.myPromise = this.accountService.saveAccount(this.account).then(function (result) {
                if (result.Status === 'Success') {
                    _this.accountEdit.isActive = false;
                    _this.accountView.isActive = true;
                    _this.loadAccount();
                }
                else {
                    //show error message...
                    console.log('ERROR::' + result.Message);
                }
            });
        }
    };
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
exports.accountComponent = {
    controller: AccountComponent,
    templateUrl: function () { return location.hostname === "localhost" ? 'app/account/account.html' : 'account.html'; }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by N.G on 15/04/2017.
 */
var AccountModel = (function () {
    function AccountModel(Id, Name, Phone, Type, Website, Status, Message) {
        this.Id = Id;
        this.Name = Name;
        this.Phone = Phone;
        this.Type = Type;
        this.Website = Website;
        this.Status = Status;
        this.Message = Message;
    }
    return AccountModel;
}());
exports.AccountModel = AccountModel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var account_component_1 = __webpack_require__(1);
var account_service_1 = __webpack_require__(4);
var accountView_component_1 = __webpack_require__(6);
var accountEdit_component_1 = __webpack_require__(5);
exports.AccountModule = angular
    .module('AccountModule', [])
    .component('account', account_component_1.accountComponent)
    .component('accountView', accountView_component_1.accountViewComponent)
    .component('accountEdit', accountEdit_component_1.accountEditComponent)
    .service('accountService', account_service_1.AccountService);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var account_model_1 = __webpack_require__(2);
var AccountService = (function () {
    function AccountService($q, sfUtilsService) {
        this.$q = $q;
        this.sfUtilsService = sfUtilsService;
    }
    AccountService.prototype.getAccount = function (arg) {
        var p;
        //For local testing::
        if (location.hostname === "localhost") {
            p = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(new account_model_1.AccountModel(arg.Id, 'Acc1', '054-9914567', 'Other', 'Acc1.com'));
                }, 1000);
            });
        }
        else {
            p = this.sfUtilsService.sfRemote('CustomAccountLayout_CTRL.getAccount', arg); //For server.
        }
        return this.$q.when(p).then(// Log the fulfillment value
        function (val) {
            return val;
        })
            .catch(
        // Log the rejection reason
        function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
    };
    AccountService.prototype.saveAccount = function (arg) {
        var p;
        //For local testing::
        if (location.hostname === "localhost") {
            p = new Promise(function (resolve, reject) {
                resolve({ 'Status': 'Success', 'Message': '' });
            });
        }
        else {
            p = this.sfUtilsService.sfRemote('CustomAccountLayout_CTRL.saveAccount', arg); //For server.
        }
        return this.$q.when(p).then(// Log the fulfillment value
        function (val) {
            return val;
        })
            .catch(
        // Log the rejection reason
        function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
    };
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountEditComponent = (function () {
    function AccountEditComponent() {
    }
    AccountEditComponent.prototype.$onInit = function () {
        this.accountCtrl.addAccountEdit(this);
        this.isActive = false;
    };
    return AccountEditComponent;
}());
exports.AccountEditComponent = AccountEditComponent;
exports.accountEditComponent = {
    controller: AccountEditComponent,
    bindings: {
        isActive: '<'
    },
    require: { accountCtrl: '^?account' },
    templateUrl: function () { return location.hostname === "localhost" ? 'app/account/accountEdit.html' : 'accountEdit.html'; }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountViewComponent = (function () {
    function AccountViewComponent() {
    }
    AccountViewComponent.prototype.$onInit = function () {
        this.accountCtrl.addAccountView(this);
        this.isActive = true;
    };
    return AccountViewComponent;
}());
exports.AccountViewComponent = AccountViewComponent;
exports.accountViewComponent = {
    controller: AccountViewComponent,
    bindings: {
        isActive: '<'
    },
    require: { accountCtrl: '^?account' },
    templateUrl: function () { return location.hostname === "localhost" ? 'app/account/accountView.html' : 'accountView.html'; }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = (function () {
    function AppComponent() {
        this.cmpName = 'AppComponent';
    }
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    templateUrl: function () { return location.hostname === "localhost" ? 'app/app.html' : 'app.html'; }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = __webpack_require__(0);
angular.bootstrap(document, [
    app_module_1.appModule.name
]);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ })
/******/ ]);