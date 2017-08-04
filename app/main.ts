import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users/users.component";
import { HttpModule } from '@angular/http';

@NgModule ({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, UsersListComponent ],
    bootstrap: [ AppComponent ]
})

class UsersAppModule {}

platformBrowserDynamic().bootstrapModule(UsersAppModule);