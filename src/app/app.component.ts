import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  //templateUrl: "./user/login/login.component.html",
  styleUrls: ["./app.component.css"],
  //styleUrls: ["./user/login/login.component.css"],
})
export class AppComponent {
  title = "app";
  onLogin: any;
  email: any;
  password: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(["/login"]); // Change to '/register' if you want
  }
}
