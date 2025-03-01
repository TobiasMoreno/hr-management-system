import { Component } from '@angular/core';
import { SideBarComponent } from './shared/ui/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sist-gestion-rrhh';
}
