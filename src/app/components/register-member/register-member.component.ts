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
  registrationForm!: FormGroup; 
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

      this.registerMemberService.registerMember(registerMemberModel).subscribe(
        (response: Response) => {
          console.log('Member successfully registered for the competition', response);
        },
        (error: any) => {
          console.error('Error registering member for the competition', error);
        }
      );
    }
  }
}
