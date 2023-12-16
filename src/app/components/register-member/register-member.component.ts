import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CompetitionService } from 'src/app/services/competitions/competition.service';
import { RegisterMember } from 'src/app/models/register-member';
import { RegisterMemberC } from 'src/app/models/register-member';
import { RegisterMemberService } from 'src/app/services/members/register-member.service';



@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegisterMemberComponent implements OnInit {
  registrationForm!: FormGroup; // Add the '!' operator to indicate that it will be initialized in ngOnInit
  constructor(private formBuilder: FormBuilder, private registerMemberService: RegisterMemberService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      member: ['', Validators.required],
      competition: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const registerMemberData: RegisterMember = {
        member: this.registrationForm.value.member,
        competition: this.registrationForm.value.competition,
      };

      const registerMemberModel = new RegisterMemberC(
        registerMemberData.member,
        registerMemberData.competition
      );

      // Call the API to register the member in the competition
      this.registerMemberService.registerMember(registerMemberModel).subscribe(
        (response: Response) => {
          console.log('Member successfully registered for the competition', response);
          // Handle success here, e.g., show a success message to the user
        },
        (error: any) => {
          console.error('Error registering member for the competition', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }
}
