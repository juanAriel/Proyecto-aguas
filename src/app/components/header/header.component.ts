import { Component, OnInit } from '@angular/core';
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
  constructor(private authSvc:AuthService) { }

  async ngOnInit() {
    console.log('header');
    this.user= await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
    }
  }
}
