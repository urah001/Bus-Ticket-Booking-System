import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  email: string = "";
  password: string = "";

  
  constructor(private http: HttpClient, private router: Router) {}
  onRegister() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post("http://localhost/auth-api/register.php", userData)
      .subscribe({
        next: (response: any) => {
          console.log("Registration successful", response);
          alert("Registered successfully!");
          this.router.navigate(['/']); // Redirects to home ("/" means root)
        
        },
        error: (error) => {
          console.error("Registration failed", error);
          alert("Registration failed");
        }, 
      });
  }
}
