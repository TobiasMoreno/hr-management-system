import { AuthService } from '@/app/shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CodeInputModule, RouterLink, MatButtonModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css',
})
export default class ActivateAccountComponent {
  private _router = inject(Router);
  private _authService = inject(AuthService);

  message: string = '';
  isOkay: boolean = false;
  submitted: boolean = false;

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }
  confirmAccount(token: string) {
    this._authService.activateAccount(token).subscribe({
      next: () => {
        this.isOkay = true;
        this.submitted = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.isOkay = false;
        this.submitted = true;
      }
    });
  }
}
