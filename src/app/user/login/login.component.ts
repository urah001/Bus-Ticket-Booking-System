import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  // Inject HttpClient

  constructor(private http: HttpClient, private router: Router) {}
  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    // Make POST request to your PHP auth server
    this.http.post("http://localhost/auth-api/login.php", loginData).subscribe({
      next: (response: any) => {
        console.log("Login successful", response);
        this.router.navigate(["/"]);
        // Optionally store token/session info
        // localStorage.setItem('token', response.token);
      },
      error: (error) => {
        console.error("Login failed", error);
        alert("Login failed");
      },
    });
  }
}
