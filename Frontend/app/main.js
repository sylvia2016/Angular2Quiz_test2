"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var common_service_1 = require('./common.service');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders, common_service_1.CommonService, http_1.HTTP_PROVIDERS, forms_1.disableDeprecatedForms, forms_1.provideForms]);
//# sourceMappingURL=main.js.map