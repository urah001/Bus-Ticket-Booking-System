import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { KindeAngularModule } from "kinde-angular";
//import { provideKinde } from "kinde-angular";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      provideKinde({
        clientId: "119b841e7870437c9ab2c18736855baa",
        authDomain: "https://urservices.kinde.com",
        redirectURL: "http://localhost:4200/", //where user gets dumped after succefully login
        logoutRedirectURL: "http://localhost:4200/", //this is where the user is sent after logging out.It often points to a landing page, login page, or home page.
      }),
    ],
  })
  .catch((err) => console.log(err));
