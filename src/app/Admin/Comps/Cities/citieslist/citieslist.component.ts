import { Component, OnInit } from "@angular/core";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-citieslist",
  templateUrl: "./citieslist.component.html",
  styleUrls: ["./citieslist.component.css"]
})
export class CitieslistComponent implements OnInit {
  constructor(private counrty: CountryserviceService,
    private root:Router,
    private user: AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.counrty.getallcities().subscribe(data => {
      this.court = data;
    });
  }

  delete(id: number) {
    console.log("delete id :" + id);
    this.counrty.deletedecities(id)
    this.root.navigateByUrl("/process")
  }
  get userauthentication()
  {
    return this.user.loggedinadmin();
  }
}
