import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FeedbackForm } from '../../../../shared/interface';
import { MatButtonModule } from '@angular/material/button';
import { NgxSonnerToaster, toast } from 'ngx-sonner';

@Component({
  selector: 'app-create-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, NgxSonnerToaster],
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.css',
})
export default class CreateFeedbackComponent {
  private _fb = inject(FormBuilder);
  today = new Date().toISOString().split('T')[0];

  feedbackForm = this._fb.group<FeedbackForm>({
    performanceReviewId: this._fb.control(null, [Validators.required]),
    feedbackGiverEmployeeId: this._fb.control(null, [Validators.required]),
    comments: this._fb.control('', [Validators.required]),
    feedbackDate: this._fb.control(this.today, [Validators.required]),
  });

  submit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      toast('Feedback submitted successfully');
    }
  }
}
