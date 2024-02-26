import { Component, OnInit,   } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  isMember: boolean = false;
  isJury: boolean = false;
  isManager: boolean = false;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      const role = this.storageService.getUser().role;
      console.log(role);
      if (role === 'MEMBER') {
        this.isMember = true;
      } else if (role === 'JURY') {
        this.isJury = true;
      } else if (role === 'MANAGER') {
        this.isManager = true;
      }
    }
  }

  logout(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
