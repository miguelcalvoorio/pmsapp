import {Component} from "angular2/core";

@Component({
  selector: "app-login",
  template: `
    <div style="margin-top:60px">
      <div class="pms-login-signin">
        <div class="pms-signin-title">
          Sign in...
        </div>
        <form>
          <div class="pms-signin-formelements">
            <div>
              <label class="pms-signin-form-label">User name</label>
              <input type="text" class="pms-signin-form-input">
            </div>
            <div>
              <label class="pms-signin-form-label">Password</label>
              <input type="password" class="pms-signin-form-input">
            </div>
            <div>
              <label class="pms-signin-form-label"></label>
              <div style="display: inline-block;">
                <input type="checkbox" class="pms-signin-checkbox">
                <label class="pms-signin-checkbox">Remember me next time</label>
              </div>
            </div>
          </div>
          <div style="overflow:hidden;">
            <div class="pms-signin-formbuttons">
              <button type="submit">Sign in</button><br>
            </div>
          </div>
          <div style="text-align:right; margin-top:1rem">
            <a href="">Forgot your password?</a>
          </div>
        </form>
      </div>
      <div class="pms-login-welcome">
        <div class="pms-login-welcome-title">Welcome</div>
        <div class="pms-login-welcome-subtitle">This is the starting point to manage your projects</div>
        <div class="pms-login-welcome-content">Flex Manager will help you to easily admin your projects and teams
        from any device. Just a few clicks to set-up your project and teams
        deployed and you will be able to manage all related things as tasks
        backlog, milestones acomplishment, effort, schedule and much more.
        And all of this could be done in a simple and effective way.</div>
        <div class="pms-login-welcome-content">We hope it could help you.</div>
      </div>
    </div>
  `,
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `],
  styleUrls: ["../src/css/login.css"]
})
export class LoginComponent {}
