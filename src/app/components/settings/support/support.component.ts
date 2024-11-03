import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionModule,
    MatExpansionPanel,
    MatIcon,
    MatButtonModule,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
  providers: [MatSnackBar],
})
export class SupportComponent {
  faqs = [
    {
      question: 'How can I reset my password?',
      answer:
        'Go to Settings > Privacy & Security and select "Change Password".',
    },
    {
      question: 'How do I contact support?',
      answer:
        'Click the "Contact Support" button below or email support@example.com.',
    },
  ];

  _snack = inject(MatSnackBar);

  contactSupport() {
    this._snack.open('Contact Support', 'Close', {
      duration: 3000,
    });
  }
}
