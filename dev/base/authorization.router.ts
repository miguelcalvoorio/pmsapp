import {Directive, Attribute, ElementRef, DynamicComponentLoader} from "angular2/core";
import {Router, RouterOutlet, ComponentInstruction} from "angular2/router";

@Directive({
  selector: "router-outlet"
})
export class AuthorizationRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_viewContainerRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute("name") nameAttr: string) {
    super(_viewContainerRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    // The Boolean following each route below
    // denotes whether the route requires authentication to view
    this.publicRoutes = {
      "home": true,
      "login": true
    };
  }

  activate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    // if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
    if (!this.publicRoutes[url]) {
      this.parentRouter.navigateByUrl("/login");
    }
    return super.activate(instruction);
  }
}
