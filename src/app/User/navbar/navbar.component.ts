import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private authservice: AuthService) {}


  system1
  
  logout() {
    this.authservice.logout();
  }
  ngOnInit() {
    this.system();
  }

  get userauthentication() {
    return this.authservice.loggedin();
  }
  
  system() {
     this.authservice.SystemisActive().subscribe(data =>{
      this.system1 = data
    
    });
    
    if (this.system1 == true) return true;
    return false;
  }
}
