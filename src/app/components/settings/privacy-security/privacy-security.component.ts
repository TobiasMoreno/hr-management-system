import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-privacy-security',
  standalone: true,
  imports: [MatListModule, MatIcon, MatSlideToggleModule, MatButtonModule],
  templateUrl: './privacy-security.component.html',
  styleUrl: './privacy-security.component.css',
})
export class PrivacySecurityComponent {
  devices = [
    { name: 'iPhone 13', lastActive: '2024-11-01' },
    { name: 'MacBook Pro', lastActive: '2024-10-30' },
  ];
}
