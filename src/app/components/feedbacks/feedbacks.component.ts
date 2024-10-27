import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [RouterLink, MatListItem, MatIcon, MatButtonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css',
})
export default class FeedbacksComponent {

}
