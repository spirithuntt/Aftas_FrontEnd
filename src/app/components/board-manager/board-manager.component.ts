import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member/member.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-manager.component.html',
  styleUrl: './board-manager.component.css'
})
export class BoardManagerComponent implements OnInit{
  members: any[] = [];
  constructor(private memberService: MemberService) { 
    this.members = [];
  }

  ngOnInit(): void {
    this.memberService.getAllMembers().subscribe(
      (data) => {
        console.log(data); 
        this.members = data.data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }



  unlockAccount(userId: number): void {
    this.memberService.unlockAccount(userId).subscribe(
      () => {
        console.log('Account unlocked successfully');
      },
      (error) => {
        console.error('Error unlocking account:', error);
      }
    );
  }

}

