import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthService]
})
export class HeaderComponent implements OnInit {
  public isLogged=false;
  public user:any;
  constructor(private authSvc:AuthService, private router:Router) { }

  async ngOnInit() {
    //console.log('header');
    this.user= await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
    }
  }
 async onLogout(){
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error)
    }
    //this.authSvc.logout();
  }
}
