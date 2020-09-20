import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-adminNavbar',
  templateUrl: './adminNavbar.component.html',
  styleUrls: ['./adminNavbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private authservice:AuthService ) { }

  ngOnInit() {

    this.getadminmail()
  }
admin
  
getadminmail(){
  this.admin = this.authservice.getcurrentuadminail
 }

 get userauthentication() {
  return this.authservice.loggedinadmin();
}

 logout() {
  this.authservice.logoutadmin();
}
}
