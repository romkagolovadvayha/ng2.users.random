import { Component } from "@angular/core";
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
    selector: "users-list",
    templateUrl: "app/users/users.component.html",
    styleUrls: ["app/users/users.component.css"]
})
export class UsersListComponent {
    UsersList: Object[] = [];
    selectedUser: Object;
    constructor (http: Http) {
        http.get('https://api.randomuser.me/1.0/?results=10&nat=gb,us&inc=gender,name,location,email,phone,picture')
            .map(res => res.json())
            .subscribe(users => this.UsersList = users.results);
            
    }
    onSelect(user: Object) {
        this.selectedUser = user;
        console.log(this.UsersList);
    }
}