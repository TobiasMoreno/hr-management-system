import {
  AuthenticationRequest,
  ILogin,
  RegisterRequest,
} from '@/app/shared/interfaces/auth.interface';
import { AuthService } from '@/app/shared/services/auth.service';
import { TokenService } from '@/app/shared/services/token/token.service';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export default class AuthComponent {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  _fb = inject(FormBuilder);
  _router = inject(Router);
  _authService = inject(AuthService);
  _tokenService = inject(TokenService);

  authRequest: AuthenticationRequest = { email: '', password: '', token: '' };
  registerRequest: RegisterRequest= { email: '', firstName: '', lastName: '', password: '' };
  errorMsg: Array<string> = [];

  ngOnInit(): void {
    this.loginForm = this._fb.group<ILogin>({
      email: this._fb.control('', [Validators.required, Validators.email]),
      password: this._fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.registerForm = this._fb.group<ILogin>({
      email: this._fb.control('', [Validators.required, Validators.email]),
      password: this._fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onLogin(): void {
    this.errorMsg = [];
    this._authService.login(this.authRequest).subscribe({
      next: (res) => {
        this._tokenService.token = res.token as string;
        this._router.navigate(['/home']);
        console.log(res);
        
      },
      error: (err) => {
        this.errorMsg.push(err.error.message);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
      },
    });
  }

  
}
