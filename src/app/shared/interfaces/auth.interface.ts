import { FormControl } from '@angular/forms';

export interface ILogin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface AuthenticationRequest {
  email: string | null;
  password: string | null;
  token: string | null;
}

export interface RegisterRequest {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  password: string | null;
}
