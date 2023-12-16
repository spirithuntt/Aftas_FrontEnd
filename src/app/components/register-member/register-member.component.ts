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
export class RegisterMemberComponent {

}
