import {Component} from "angular2/core";
import {HeaderComponent} from "./base/header.component";
import {HomeComponent} from "./base/home.component";
import {LoginComponent} from "./base/login.component";
import {AppContentComponent} from "./base/app-content.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {AuthorizationRouterOutlet} from "./base/authorization.router";

@Component({
    selector: "my-app",
    template: `
        <div id="container-header">
          <app-header></app-header>
        </div>
        <div id="container-body">
          <!--<app-content></app-content>-->
          <router-outlet></router-outlet>
        </div>
    `,
    directives: [HeaderComponent, AuthorizationRouterOutlet]
})
@RouteConfig([
  {path: "/home", name: "PublicHome", component: HomeComponent, useAsDefault: true},
  {path: "/login", name: "PublicLogin", component: LoginComponent},
  {path: "/private", name: "PrivateHome", component: AppContentComponent}
])

export class AppComponent {

}
