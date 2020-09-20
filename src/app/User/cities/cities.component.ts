import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { delay } from "q";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { Cities } from "src/app/model/Cities";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.css"]
})
export class CitiesComponent implements OnInit {
  constructor(
    private countryservice: CountryserviceService,
    private activatedroute: ActivatedRoute
  ) {}

  search: any = {};
  countyr;
  serachdata;
  cities: Cities[];
  acisites: any = [];
  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.getcities(params["country"]);
    });
    this.activatedroute.params.subscribe(params => {
      this.getcitiAF(params["country"]);
    });
    this.activatedroute.params.subscribe(params => {
      this.getcitiGL(params["country"]);
    });
    this.activatedroute.params.subscribe(params => {
      this.getcitiMS(params["country"]);
    });
    this.activatedroute.params.subscribe(params => {
      this.getcitiTZ(params["country"]);
    });
    this.activatedroute.params.subscribe(params => {
      this.getcitiQWX(params["country"]);
      this.countyr = params["country"];
    });
  }

  serachcity() {
    this.countryservice
      .searchcity(this.search.city, this.countyr)
      .subscribe(data => {
        this.serachdata = data;
        console.log(data);
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

  getcities(country) {
    this.countryservice.getcities(country).subscribe(data => {
      this.cities = data;
    });
  }

  cities1: Cities[];
  cities2: Cities[];
  cities3: Cities[];
  cities4: Cities[];
  cities5: Cities[];

  getcitiAF(country) {
    this.countryservice.getcitiesaf(country).subscribe(data => {
      this.cities1 = data;
    });
  }
  getcitiGL(country) {
    this.countryservice.getcitiesgl(country).subscribe(data => {
      this.cities2 = data;
    });
  }
  getcitiMS(country) {
    this.countryservice.getcitiesms(country).subscribe(data => {
      this.cities3 = data;
    });
  }
  getcitiTZ(country) {
    this.countryservice.getcitiestz(country).subscribe(data => {
      this.cities4 = data;
    });
  }
  getcitiQWX(country) {
    this.countryservice.getcitiesqwx(country).subscribe(data => {
      this.cities5 = data;
    });
  }
}
