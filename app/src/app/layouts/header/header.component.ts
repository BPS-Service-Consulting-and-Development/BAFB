import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private tokenService: TokenService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // if (this.tokenService.getToken()) {
    //   this.isAuthenticated = true;
    // }
    this.tokenService.tokenObservable.subscribe((token) => {
        this.isAuthenticated = token ? true : false;      
    });
  }

  signOut() {
    this.tokenService.removeToken();
    this.router.navigate(['/home']);
  }

}
