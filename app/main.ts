import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users/users.component";
import {OrderByPipe} from "./orderby/orderby.component"
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule ({
    imports: [ BrowserModule, HttpModule, FormsModule ],
    declarations: [ AppComponent, UsersListComponent, OrderByPipe ],
    bootstrap: [ AppComponent ]
})

class UsersAppModule {}

platformBrowserDynamic().bootstrapModule(UsersAppModule);