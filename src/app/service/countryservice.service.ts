import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Countryclass } from "../model/countryclass";
import { Cities } from "../model/Cities";
import { AlertifyService } from "./alertify.service";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class CountryserviceService {
  path2 = environment.path + "Country/";

  constructor(
    private httpclient: HttpClient,
    private root: Router,
    private alertify: AlertifyService
  ) {}

  searchcity(city, country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "searchcity?city=" + city + "&country=" + country
    );
  }

  searchcountry(country): Observable<Countryclass[]> {
    return this.httpclient.get<Countryclass[]>(
      this.path2 + "searchcountry?Country=" + country
    );
  }

  getonecity(id): Observable<Cities> {
    return this.httpclient.get<Cities>(this.path2 + "getcitid?id=" + id);
  }

  getonecountry(id): Observable<Countryclass> {
    return this.httpclient.get<Countryclass>(
      this.path2 + "getcountrid?id=" + id
    );
  }

  getcountry(): Observable<Countryclass[]> {
    return this.httpclient.get<Countryclass[]>(this.path2 + "cinfo");
  }

  getcities(country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "cities?Country=" + country
    );
  }

  getallcities(): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(this.path2 + "allcities");
  }

  getcitiesaf(country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "getaf?country=" + country
    );
  }
  getcitiesgl(country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "getgl?country=" + country
    );
  }
  getcitiesms(country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "getms?Country=" + country
    );
  }
  getcitiestz(country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "gettz?Country=" + country
    );
  }
  getcitiesqwx(country): Observable<Cities[]> {
    return this.httpclient.get<Cities[]>(
      this.path2 + "getqwx?Country=" + country
    );
  }

  addCountry(country: Countryclass) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpclient
      .post(this.path2 + "addcountry", country, { headers: headers })
      .subscribe(data => {
        setTimeout(() => {
          this.root.navigateByUrl("/countrylist");
          this.alertify.success("Added new country: " + country.name);
        }, 150);
    
      });
  }

  deleteCountry(id: number) {
    return this.httpclient
      .delete(this.path2 + "deletecountry?id=" + id)
      .subscribe(data => {
        this.root.navigateByUrl("/countrylist");
        this.alertify.error("Country is deleted.");
      });
  }
  updateCountry(country: Countryclass) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpclient
      .put(this.path2 + "updatecountry", country, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/countrylist");
        this.alertify.success("Updated country: " + country.name);
      });
  }

  addcities(cities: Cities) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpclient
      .post(this.path2 + "addcity", cities, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/citieslist");
        this.alertify.success("Added new cities: " + cities.name);
      });
  }
  deletedecities(citiid: number) {
    return this.httpclient
      .delete(this.path2 + "deletecity?id=" + citiid)
      .subscribe(data => {
        this.root.navigateByUrl("/citieslist");
        this.alertify.error("Cities is deleted.");
      });
  }
  updateCities(cities: Cities) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpclient
      .put(this.path2 + "updatecity", cities, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/citieslist");
        this.alertify.warning("Updated city: " + cities.name);
      });
  }
}
