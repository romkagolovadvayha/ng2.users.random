"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_component_1 = require("./app.component");
const users_component_1 = require("./users/users.component");
const orderby_component_1 = require("./orderby/orderby.component");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
let UsersAppModule = class UsersAppModule {
};
UsersAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, users_component_1.UsersListComponent, orderby_component_1.OrderByPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], UsersAppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(UsersAppModule);
//# sourceMappingURL=main.js.map