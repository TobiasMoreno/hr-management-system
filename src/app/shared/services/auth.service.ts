import { inject, Injectable } from '@angular/core';
import { BaseHttpService } from '../data-access/base-http.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationRequest, RegisterRequest } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  private authUrl = 'http://localhost:8088/api/v1/auth';
  private _http = inject(HttpClient);
  private isLoggedIn = false;

  login(authRequest: AuthenticationRequest): Observable<AuthenticationRequest> {
    this.isLoggedIn = true;
    localStorage.setItem('token', 'fake-jwt-token');
    return this._http.post<AuthenticationRequest>(
      this.authUrl + '/authenticate',
      authRequest
    );
  }

  register(authRequest: RegisterRequest): Observable<RegisterRequest> {
    // Implementar registro con el backend si es necesario
    return this._http.post<RegisterRequest>(this.authUrl + '/register', authRequest);
  }

  activateAccount(token: string): Observable<any> {
    // Implementar activación de cuenta con el backend si es necesario
    const params = new HttpParams().set('token', token);
    return this._http.get<any>(this.authUrl + '/activate-account', { params });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }
}
