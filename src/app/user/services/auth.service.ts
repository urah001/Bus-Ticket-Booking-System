import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost/auth-api'; // change if hosted elsewhere

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login.php`, { email, password });
  }

  register(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/register.php`, { email, password });
  }
}
