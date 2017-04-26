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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SFUtilsSelectorService = (function () {
    function SFUtilsSelectorService(sfServer, sfMock) {
        this.sfServer = sfServer;
        this.sfMock = sfMock;
    }
    SFUtilsSelectorService.prototype.sfRemote = function (name, arg) {
        return SFUtilsSelectorService.isLocal() ? this.sfMock.sfRemote(name, arg) : this.sfServer.sfRemote(name, arg);
    };
    SFUtilsSelectorService.isLocal = function () {
        return location.hostname === "localhost";
    };
    SFUtilsSelectorService.buildTemplateURL = function (url) {
        var relevantURL = url;
        if (!SFUtilsSelectorService.isLocal() && url) {
            relevantURL = url.split(/[// ]+/).pop();
        }
        return relevantURL;
    };
    return SFUtilsSelectorService;
}());
exports.SFUtilsSelectorService = SFUtilsSelectorService;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by N.G on 16/04/2017.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var SFUtilsService = (function () {
    function SFUtilsService() {
    }
    return SFUtilsService;
}());
SFUtilsService.FUNCTIONS_NAME_MAP = {
    'getAccount': 'CustomAccountLayout_CTRL.getAccount',
    'saveAccount': 'CustomAccountLayout_CTRL.saveAccount',
    'getContacts': 'CustomAccountLayout_CTRL.getContacts'
};
exports.SFUtilsService = SFUtilsService;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = __webpack_require__(8);
var account_module_1 = __webpack_require__(4);
var sfUtilsSelector_service_1 = __webpack_require__(0);
var sfUtilsServer_server_1 = __webpack_require__(13);
var sfUtilsMock_service_1 = __webpack_require__(12);
var recordsTable_module_1 = __webpack_require__(11);
exports.appModule = angular
    .module('appModule', [
    'cgBusy',
    account_module_1.accountModule.name,
    recordsTable_module_1.recordsTableModule.name
])
    .value('cgBusyDefaults', {
    templateUrl: sfUtilsSelector_service_1.SFUtilsSelectorService.buildTemplateURL('app/spinner/customSpinner.html')
})
    .component('myApp', app_component_1.appComponent)
    .service('sfUtilsServiceSelector', sfUtilsSelector_service_1.SFUtilsSelectorService)
    .service('sfServer', sfUtilsServer_server_1.SFUtilsServer)
    .service('sfMock', sfUtilsMock_service_1.SFUtilsMock)
    .config(function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false //http://stackoverflow.com/questions/16837704/angularjs-normal-links-with-html5mode
    });
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfUtilsSelector_service_1 = __webpack_require__(0);
var AccountComponent = (function () {
    function AccountComponent($location, accountService, $scope) {
        this.$location = $location;
        this.accountService = accountService;
        this.$scope = $scope;
        this.loadViewAccount();
    }
    AccountComponent.prototype.loadViewAccount = function () {
        var _this = this;
        this.editAccountModel = null;
        this.$scope.viewAccountPromise = this.getAccount(this.$location.search())
            .then(function (account) {
            _this.viewAccountModel = account;
        });
        this.$scope.contactsPromise = this.getContacts(this.$location.search())
            .then(function (account) {
            _this.contacts = account.Contacts;
        });
    };
    AccountComponent.prototype.loadEditAccount = function () {
        var _this = this;
        this.viewAccountModel = null;
        this.$scope.editAccountPromise = this.getAccount(this.$location.search())
            .then(function (account) {
            _this.editAccountModel = account;
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
        this.loadEditAccount();
    };
    AccountComponent.prototype.cancelEditAccount = function () {
        this.accountEdit.isActive = false;
        this.accountView.isActive = true;
        this.loadViewAccount();
    };
    AccountComponent.prototype.saveAccount = function (isValid) {
        var _this = this;
        if (isValid) {
            this.$scope.editAccountPromise = this.accountService.saveAccount(this.editAccountModel).then(function (result) {
                if (result.Status === 'Success') {
                    _this.accountEdit.isActive = false;
                    _this.accountView.isActive = true;
                    _this.loadViewAccount();
                }
                else {
                    //show error message...
                    console.log('ERROR::' + result.Message);
                }
            });
        }
    };
    AccountComponent.prototype.getContacts = function (arg) {
        return this.accountService.getContacts(arg);
    };
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
exports.accountComponent = {
    controller: AccountComponent,
    templateUrl: sfUtilsSelector_service_1.SFUtilsSelectorService.buildTemplateURL('app/account/account.html')
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var account_component_1 = __webpack_require__(3);
var account_service_1 = __webpack_require__(5);
var accountView_component_1 = __webpack_require__(7);
var accountEdit_component_1 = __webpack_require__(6);
exports.accountModule = angular
    .module('accountModule', [])
    .component('account', account_component_1.accountComponent)
    .component('accountView', accountView_component_1.accountViewComponent)
    .component('accountEdit', accountEdit_component_1.accountEditComponent)
    .service('accountService', account_service_1.AccountService);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfUtils_service_1 = __webpack_require__(1);
var AccountService = (function () {
    function AccountService(sfUtilsServiceSelector) {
        this.sfUtilsServiceSelector = sfUtilsServiceSelector;
    }
    AccountService.prototype.getAccount = function (arg) {
        return this.sfUtilsServiceSelector.sfRemote(sfUtils_service_1.SFUtilsService.FUNCTIONS_NAME_MAP.getAccount, arg);
    };
    AccountService.prototype.saveAccount = function (arg) {
        return this.sfUtilsServiceSelector.sfRemote(sfUtils_service_1.SFUtilsService.FUNCTIONS_NAME_MAP.saveAccount, arg);
    };
    AccountService.prototype.getContacts = function (arg) {
        return this.sfUtilsServiceSelector.sfRemote(sfUtils_service_1.SFUtilsService.FUNCTIONS_NAME_MAP.getContacts, arg);
    };
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfUtilsSelector_service_1 = __webpack_require__(0);
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
    templateUrl: sfUtilsSelector_service_1.SFUtilsSelectorService.buildTemplateURL('app/account/accountEdit.html')
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfUtilsSelector_service_1 = __webpack_require__(0);
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
    templateUrl: sfUtilsSelector_service_1.SFUtilsSelectorService.buildTemplateURL('app/account/accountView.html')
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfUtilsSelector_service_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
        this.cmpName = 'AppComponent';
    }
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    templateUrl: sfUtilsSelector_service_1.SFUtilsSelectorService.buildTemplateURL('app/app.html')
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = __webpack_require__(2);
angular.bootstrap(document, [
    app_module_1.appModule.name
]);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfUtilsSelector_service_1 = __webpack_require__(0);
var RecordsTableComponent = (function () {
    function RecordsTableComponent() {
        //Sample data:
        //this.data = [{Name: 'test1', Title: 'test2', Company: 'test6'}, {Name: 'test3', Title: 'test4', Company: 'test7'}];
    }
    RecordsTableComponent.prototype.$onInit = function () {
        //debugger;
        //bindings variable are available in this stage:
    };
    return RecordsTableComponent;
}());
exports.recordsTableComponent = {
    controller: RecordsTableComponent,
    bindings: {
        title: '@',
        headers: '<',
        fields: '<',
        data: '<'
    },
    templateUrl: sfUtilsSelector_service_1.SFUtilsSelectorService.buildTemplateURL('app/recordsTable/recordsTable.html')
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recordsTable_component_1 = __webpack_require__(10);
exports.recordsTableModule = angular
    .module('recordsTableModule', [])
    .component('recordsTable', recordsTable_component_1.recordsTableComponent);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sfUtils_service_1 = __webpack_require__(1);
var SFUtilsMock = (function (_super) {
    __extends(SFUtilsMock, _super);
    function SFUtilsMock($timeout) {
        var _this = _super.call(this) || this;
        _this.$timeout = $timeout;
        return _this;
    }
    SFUtilsMock.prototype.sfRemote = function (name, arg) {
        var answer;
        switch (name) {
            case sfUtils_service_1.SFUtilsService.FUNCTIONS_NAME_MAP.getAccount:
                {
                    answer = this.$timeout(function () {
                        return { Id: arg.Id, Name: 'Acc1', Phone: '054-9914567', Type: 'Other', Website: 'Acc1.com' };
                    }, 2000);
                    break;
                }
            case sfUtils_service_1.SFUtilsService.FUNCTIONS_NAME_MAP.saveAccount:
                {
                    answer = this.$timeout(function () {
                        var saveAccountAns;
                        if (arg) {
                            saveAccountAns = { Status: 'Success', Message: '' };
                        }
                        else {
                            saveAccountAns = { Status: 'Error', Message: 'Save Account Error' };
                        }
                        return saveAccountAns;
                    }, 3000);
                    break;
                }
            case sfUtils_service_1.SFUtilsService.FUNCTIONS_NAME_MAP.getContacts:
                {
                    answer = this.$timeout(function () {
                        return { Contacts: [{ Email: 'jrogers@burlington.com', Id: 'c123456788', Name: 'Jack Rogers', Title: 'VP, Facilities' },
                                { Email: 'jrogers1@burlington.com', Id: 'c123456785', Name: 'Jack1 Rogers1', Title: 'VP1, Facilities1' }],
                            Id: 'a12345678', Status: 'Success' };
                    }, 4000);
                    break;
                }
            default:
                {
                    answer = this.$timeout(function () {
                        return { 'Status': 'Error', 'Message': 'No function name provided.' };
                    }, 100);
                }
        }
        return answer;
    };
    return SFUtilsMock;
}(sfUtils_service_1.SFUtilsService));
exports.SFUtilsMock = SFUtilsMock;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sfUtils_service_1 = __webpack_require__(1);
var SFUtilsServer = (function (_super) {
    __extends(SFUtilsServer, _super);
    function SFUtilsServer($q) {
        var _this = _super.call(this) || this;
        _this.$q = $q;
        return _this;
    }
    SFUtilsServer.prototype.sfRemote = function (name, arg) {
        return this.$q(function (resolve, reject) {
            Visualforce.remoting.Manager.invokeAction(name, arg, function (result, event) {
                if (event.status) {
                    resolve(result);
                }
                else {
                    reject(event);
                }
            }, { buffer: true, escape: false });
        });
    };
    return SFUtilsServer;
}(sfUtils_service_1.SFUtilsService));
exports.SFUtilsServer = SFUtilsServer;


/***/ })
/******/ ]);