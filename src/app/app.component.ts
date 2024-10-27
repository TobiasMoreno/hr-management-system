import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/ui/side-bar/side-bar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { TableComponent } from './components/employees/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, FooterComponent,TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sist-gestion-rrhh';
}
