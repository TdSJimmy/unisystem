import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication';

@Component({
  selector: 'uns-leftpanel',
  templateUrl: 'leftpanel.component.html',
  styleUrls: ['leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

  name: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.name = 'Nome do servidor público';
  }

  showProfileModal(): void {
    this.router.navigate(['/profile', { show: true }], { skipLocationChange: true });
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
