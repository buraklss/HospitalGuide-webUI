import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  constructor(
    private authservice:AuthService
  ) { }

  loginuser:any={};
deger:any
sonuc
  ngOnInit() {
  }

  


   login()
  {
   this.deger =  this.authservice.adminlogin(this.loginuser);
  
    if( this.deger != null){
      
       this.sonuc =  "Login is succesfull"
     }else{
      this.sonuc =   "Mail or password is wrong"
     }

 
  }








  logout()
  {
    this.authservice.logoutadmin();
  }
  
  get userauthentication()
  {
    return this.authservice.loggedinadmin();
  }
}
