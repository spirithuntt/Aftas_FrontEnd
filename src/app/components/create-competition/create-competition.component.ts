import { CreateCompetitionService } from './../../services/competitions/create-competition.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CompetitionService } from 'src/app/services/competitions/competition.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css'],
  imports: [ReactiveFormsModule],
})
export class CreateCompetitionComponent {
  competitionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private competitionService: CompetitionService
  ) {
    this.initForm();
  }

  initForm() {
    this.competitionForm = this.formBuilder.group({
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      numberOfParticipants: ['', Validators.required],
      location: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.competitionForm.valid) {
      const competitionData = this.competitionForm.value;
      this.competitionService.CreateCompetitionComponent(competitionData).subscribe(
        (response) => {
          console.log('Competition added successfully:', response);
        },
        (error) => {
          console.error('Error adding competition:', error);
        }
      );
    }
  }
}
