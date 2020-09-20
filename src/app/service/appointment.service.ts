import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertifyService } from "./alertify.service";
import { AllDaysModel } from "../model/daysmodel";
import { HoursinDayidModel } from "../model/hosurdayid";
import { UserRandevuModel } from "../model/userrandeuvuModel";
import { HoursModel } from "../model/hourdModel";
import { RandevuModel } from "../model/randuvuModel";
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class AppointmentService {
  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private root: Router
  ) {}

  path = environment.path +"AppSystem/";

  getoneDay(id: number): Observable<AllDaysModel> {
    return this.http.get<AllDaysModel>(this.path + "getOneDay?id=" + id);
  }

  getoneHour(id: number): Observable<HoursModel> {
    return this.http.get<HoursModel>(this.path + "getOneHour?id=" + id);
  }

  getallhours(): Observable<HoursModel[]> {
    return this.http.get<HoursModel[]>(this.path + "allhourss");
  }
  getallDays(): Observable<AllDaysModel[]> {
    return this.http.get<AllDaysModel[]>(this.path + "allDays");
  }
  getDaysinDoctoridAndBool(
    doctorid: number,
    statu: Boolean
  ): Observable<AllDaysModel[]> {
    return this.http.get<AllDaysModel[]>(
      this.path +
        "DaysinDoctoridAndBool?doctor=" +
        doctorid +
        "&status=" +
        statu
    );
  }

  getHoursinDayidAndBool(
    dayid: number,
    statu: boolean
  ): Observable<HoursinDayidModel[]> {
    return this.http.get<HoursinDayidModel[]>(
      this.path + "HoursinDayidAndBool?day=" + dayid + "&status=" + statu
    );
  }

  getallDaysIndoctorid(id: number): Observable<AllDaysModel[]> {
    return this.http.get<AllDaysModel[]>(
      this.path + "allDaysIndoctorid?doctor=" + id
    );
  }

  getallDaystrue(): Observable<AllDaysModel[]> {
    return this.http.get<AllDaysModel[]>(this.path + "allDaystrue");
  }
  getallHourstruu(): Observable<HoursinDayidModel[]> {
    return this.http.get<HoursinDayidModel[]>(this.path + "allhourstrue");
  }
  getallHoursInDayid(id: number): Observable<HoursinDayidModel[]> {
    return this.http.get<HoursinDayidModel[]>(
      this.path + "allHoursInDayid?day=" + id
    );
  }

  getUserRandevu(id: number): Observable<UserRandevuModel[]> {
    return this.http.get<UserRandevuModel[]>(
      this.path + "UserRandevu?user=" + id
    );
  }

  getGetAllRandevu(): Observable<UserRandevuModel[]> {
    return this.http.get<UserRandevuModel[]>(this.path + "GetAllRandevu");
  }

  addappday(add: AllDaysModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addappday", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/dayslist");
        this.alertify.success("Add new date: " + add.date);
      });
  }
  delappday(delid: number) {
    return this.http
      .delete(this.path + "deleteappday?id=" + delid)
      .subscribe(data => {
        this.root.navigateByUrl("/dayslist");
        this.alertify.error(" Day is deleted");
      });
  }
  upappday(up: AllDaysModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updateappday", up, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/dayslist");
        this.alertify.success("Updated day: " + up.date);
      });
  }

  addapphour(add: HoursModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addapphour", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/hourslist");
        this.alertify.success("Add new hour: " + add.time);
      });
  }
  addOTOapphour(add: HoursModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addOTOapphour", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/hourslist");
        this.alertify.success("Add all hour");
      });
  }
  delapphour(delid: number) {
    return this.http
      .delete(this.path + "deleteapphour?id=" + delid)
      .subscribe(data => {
        this.root.navigateByUrl("/hourslist");
        this.alertify.error("Deleted is hour.");
      });
  }
  upapphour(up: HoursModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updateapphour", up, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/hourslist");
        this.alertify.warning("Updated is hour ");
      });
  }

  addrandevu(add: RandevuModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addrandevu", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/profile");
        console.log("add randevu day id : " + add.dayid);
        this.alertify.success("Added new randevu.");
      });
  }
  delrandevu(delid: number) {
    return this.http
      .delete(this.path + "deleterandevu?id=" + delid)
      .subscribe(data => {
        this.alertify.error("Deleted randevu");
        this.root.navigateByUrl("/profile");
      });
  }

  delrandevunotsub(delid: number) {
    return this.http.delete(this.path + "deleterandevu?id=" + delid);
  }
  uprandevu(up: RandevuModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updaterandevu", up, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/dashboard");
        this.alertify.success("Updated randevu.");
      });
  }
}
