"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let UsersListComponent = class UsersListComponent {
    constructor(http) {
        this.UsersList = [];
        http.get('https://api.randomuser.me/1.0/?results=10&nat=gb,us&inc=gender,name,location,email,phone,picture')
            .map(res => res.json())
            .subscribe(users => this.UsersList = users.results);
    }
    onSelect(user) {
        this.selectedUser = user;
        console.log(this.UsersList);
    }
};
UsersListComponent = __decorate([
    core_1.Component({
        selector: "users-list",
        templateUrl: "app/users/users.component.html",
        styleUrls: ["app/users/users.component.css"]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], UsersListComponent);
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users.component.js.map