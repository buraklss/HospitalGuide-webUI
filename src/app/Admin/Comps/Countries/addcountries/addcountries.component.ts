import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryserviceService } from 'src/app/service/countryservice.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-addcountries',
  templateUrl: './addcountries.component.html',
  styleUrls: ['./addcountries.component.css']
})
export class AddcountriesComponent implements OnInit {

  constructor(
    private root:Router,
    private county:CountryserviceService,
    private authservice:AuthService
  ) { }
country:any={}
  ngOnInit() {
  }

  postcountry(){
    if(this.country.routerlink ==undefined){
      this.country.routerlink== this.country.name

    }
    if(this.country.name ==undefined){
      this.country.name== this.country.routerlink

    }
this.county.addCountry(this.country)
console.log("post conutyr")

  this.root.navigateByUrl("/process")



  }


  cancel(){
    this.root.navigateByUrl("/dashboard")
  }
  
 get userauthentication() {
  return this.authservice.loggedinadmin();
}


handleFileInput(a){
console.log(a)
  var sp = a.split("h\\",2)
 
  this.country.flagimage =  "assets\\"+sp[1]

  console.log(
  this.country.flagimage)
}
}
