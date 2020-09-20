import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authservice:AuthService
  ) { }

  loginuser:any={};
deger:any
sonuc
  ngOnInit() {
  }

  async login()
  {
   this.deger = await this.authservice.login(this.loginuser);
   setTimeout(async () => {
    if(await this.deger == null){
       this.sonuc = await  "Mail or password is wrong"
     }else{
       this.sonuc = await "Login is succesfull"
     }
   }, 350);
 
  }

  logout()
  {
    this.authservice.logout();
  }
  
  get userauthentication()
  {
    return this.authservice.loggedin();
  }

}
