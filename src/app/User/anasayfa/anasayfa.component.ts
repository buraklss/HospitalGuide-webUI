import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { Countryclass } from "src/app/model/countryclass";
import { CountryserviceService } from "src/app/service/countryservice.service";

@Component({
  selector: "app-anasayfa",
  templateUrl: "./anasayfa.component.html",
  styleUrls: ["./anasayfa.component.css"]
})
export class AnasayfaComponent implements OnInit {
  constructor(private authserv: AuthService,
    private countryservice: CountryserviceService) {}
  countries: Countryclass[];
  serachdata:Countryclass[];
  search: any = {};
  ngOnInit() {
    this.getcountry();
  
  }
  getcountry() {
    this.authserv.getcountry().subscribe(data => {
      this.countries = data;
     
    });
  }
  get data() {
    if (this.serachdata != null || this.serachdata != undefined) {
      if (this.serachdata.length >= 0) {
  
        return false;
      } else {

        return true;
      }
    }

    return true;
  }
  serachcity() {
    this.countryservice
      .searchcountry(this.search.cityy)
      .subscribe(data => {
        this.serachdata = data;
        console.log(data);
      });
  }
  get userauthentication() {
    return this.authserv.loggedin();
  }
}
