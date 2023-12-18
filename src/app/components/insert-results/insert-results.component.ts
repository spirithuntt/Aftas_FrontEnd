import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HuntingService } from 'src/app/services/results/hunting.service';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-insert-results',
  templateUrl: './insert-results.component.html',
  styleUrls: ['./insert-results.component.css'],
  imports: [ReactiveFormsModule],
})
export class InsertResultsComponent implements OnInit {
  insertResultsForm!: FormGroup;
  competitionId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private huntingService: HuntingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.competitionId = params['competitionId'];
      this.initForm();
    });
  }

  initForm() {
    console.log('Competition ID:', this.competitionId);
    this.insertResultsForm = this.formBuilder.group({
      competitionId: [this.competitionId, Validators.required],
      member: ['', Validators.required],
      fish: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.insertResultsForm.valid) {
      const resultsData = this.insertResultsForm.value;

      this.huntingService.createHuntingResult(this.competitionId, resultsData).subscribe(
        (response) => {
          console.log('Results added successfully:', response);
        },
        (error) => {
          console.error('Error adding results:', error);
        }
      );
    }
  }

}
