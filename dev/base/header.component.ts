import {Component} from "angular2/core";

@Component({
  selector: "app-header",
  template: `
    <div class="pms-header">
      <p>
        <a class="pms-logo">Flex<span class="pms-emphasis">Manager</span></a>
        <span class="pms-appname">Flexible project managment suite</span>
      </p>
    </div>
  `,
  styleUrls: ["../src/css/base.css"]
})
export class HeaderComponent {}
