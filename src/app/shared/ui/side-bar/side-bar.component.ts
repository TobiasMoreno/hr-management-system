import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbar } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListItem, MatNavList } from '@angular/material/list';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbar,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListItem,
    MatNavList,
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {

}
