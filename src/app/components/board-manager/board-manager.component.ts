import { Component } from '@angular/core';
import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-board-manager',
  standalone: true,
  imports: [],
  templateUrl: './board-manager.component.html',
  styleUrl: './board-manager.component.css'
})
export class BoardManagerComponent {
  constructor(private memberService: MemberService) { }


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

