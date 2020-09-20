import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Clinics } from "../model/clinics";
import { Hospitals } from "../model/hospitals";
import { HosClinicsTodoctorModel } from "../model/hosClinictoDoctormodel";
import { DoctorModel } from "../model/doctormodel";
import { CommentModel } from "../model/commentModel";
import { RAteModel } from "../model/ratemodel";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class HospitalService {
  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private root: Router
  ) {}

  path = environment.path + "Clinics/";


  searchhospital(name,city): Observable<Hospitals[]> {
    return this.http.get<Hospitals[]>(this.path + "searchhospital?Name="+name+"&City="+city);
  }

  getoneClinic(id: number): Observable<Clinics> {
    return this.http.get<Clinics>(this.path + "getClinicid?id=" + id);
  }
  getoneHospital(id: number): Observable<Hospitals> {
    return this.http.get<Hospitals>(this.path + "getHospitalid?id=" + id);
  }

  getonedoctor(id: number): Observable<DoctorModel> {
    return this.http.get<DoctorModel>(this.path + "getDoctorid?id=" + id);
  }
  getoneHosCil(id: number): Observable<HosClinicsTodoctorModel> {
    return this.http.get<HosClinicsTodoctorModel>(
      this.path + "getHosCilid?id=" + id
    );
  }

  getClinics(): Observable<Clinics[]> {
    return this.http.get<Clinics[]>(this.path + "Clinics");
  }
  getHospitals(): Observable<Hospitals[]> {
    return this.http.get<Hospitals[]>(this.path + "GetAllHospitals");
  }

  getCityInHospitals(city: string): Observable<Hospitals[]> {
    return this.http.get<Hospitals[]>(
      this.path + "GetCityInHospitals?city=" + city
    );
  }

  GetOneHospitalsClinics(hosid: number): Observable<Clinics[]> {
    return this.http.get<Clinics[]>(
      this.path + "GetOneHospitalsClinics?hospital=" + hosid
    );
  }

  getHospitalClinic(
    hosid: number,
    cilcid: number
  ): Observable<HosClinicsTodoctorModel> {
    return this.http.get<HosClinicsTodoctorModel>(
      this.path + "HospitalClinic?clinic=" + cilcid + "&hospital=" + hosid
    );
  }
  getAllDoctors(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(this.path + "AllDoctors");
  }

  GetOneHosAndOneClinicInDoctors(
    hosClinicid: number
  ): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(
      this.path + "GetOneHosAndOneClinicInDoctors?hosclinicid=" + hosClinicid
    );
  }

  GetComment(hosid: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(
      this.path + "Comment?hospital=" + hosid
    );
  }
  GetAllComment(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.path + "AllComment");
  }

  getRate(hosid: number): Observable<RAteModel> {
    return this.http.get<RAteModel>(this.path + "Rate?hospital=" + hosid);
  }

  getRatevalue(hosid: number): Observable<number> {
    return this.http.get<number>(this.path + "RateValue?hospital=" + hosid);
  }

  addClinic(add: Clinics) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addclinic", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/cliniclist");
        this.alertify.success("Added new Clinic: " + add.name);
      });
  }
  delClinic(delid: number) {
    return this.http
      .delete(this.path + "deleteclinic?id=" + delid)
      .subscribe(data => {
        this.alertify.error("Deleted");
        this.root.navigateByUrl("/cliniclist");
      });
  }
  upClinic(up: Clinics) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updateclinic", up, { headers: headers })
      .subscribe(data => {
        this.alertify.warning("Updated : " + up.name);
        this.root.navigateByUrl("/cliniclist");
      });
  }

  addHospital(add: Hospitals) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addhospital", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/hospitallist");
        this.alertify.success("Add new hospital" + add.name);
      });
  }
  delHospital(delid: number) {
    return this.http
      .delete(this.path + "deletehospital?id=" + delid)
      .subscribe(data => {
        this.alertify.success("deleted hospital.");
        this.root.navigateByUrl("/hospitallist");
      });
  }
  upHospital(up: Hospitals) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updatehospital", up, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/hospitallist");
        this.alertify.success("Updated : " + up.name);
      });
  }

  adddoctor(add: DoctorModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "adddoctor", add, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/doctorlist");
        this.alertify.success(
          "Add new doctor: " + add.name + " " + add.surname
        );
      });
  }
  deldoctor(delid: number) {
    return this.http
      .delete(this.path + "deletedoctor?id=" + delid)
      .subscribe(data => {
        this.alertify.error("Deleted doctor");
        this.root.navigateByUrl("/doctorlist");
      });
  }
  updoctor(up: DoctorModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updatedoctor", up, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/doctorlist");
        this.alertify.warning("Updated doctor: " + up.name + " " + up.surname);
      });
  }

  addComment(add: CommentModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addcomment", add, { headers: headers })
      .subscribe(data => {
       this.root.navigateByUrl("/hosdetail/"+add.hospitalid)
        this.alertify.success("Add new comment: " + add.comment);
      });
  }
  delComment(delid: number) {
    return this.http
      .delete(this.path + "deletecomment?id=" + delid)
      .subscribe(data => {
        this.alertify.success("Delete comment");
        this.root.navigateByUrl("/commentlist");
      });
  }
  upComment(up: CommentModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updatecomment", up, { headers: headers })
      .subscribe(data => {
        this.root.navigateByUrl("/commentlist");
        this.alertify.warning("Updated comment: " + up.comment);
      });
  }
  addRate(hosid: number, rate: number, userid: string) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(
        this.path +
          "addrate?hos=" +
          hosid +
          "&rate=" +
          rate +
          "&user=" +
          userid,
        { headers: headers }
      )
      .subscribe(data => {});
  }

  addHospitalClinics(add: HosClinicsTodoctorModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addHospitalClinicse", add, { headers: headers })
      .subscribe(data => {
     
        this.alertify.success("" + add);
      });
  }
  delHospitalClinics(delid: number) {
    return this.http
      .delete(this.path + "deleteHospitalClinics?id=" + delid)
      .subscribe(data => {
        this.alertify.success("");
      });
  }
  upHospitalClinics(up: HosClinicsTodoctorModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .put(this.path + "updateHospitalClinics", up, { headers: headers })
      .subscribe(data => {
       
        this.alertify.success("Updated : " + up);
      });
  }

  getDoctorid(id: number): Observable<DoctorModel> {
    return this.http.get<DoctorModel>(this.path + "getDoctorid?id=" + id);
  }
  getDoctoridfor(id: number): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(this.path + "getDoctorid?id=" + id);
  }

  getoneDoctorid(id: number): Observable<DoctorModel> {
    return this.http.get<DoctorModel>(this.path + "getoneDoctorid?id=" + id);
  }
}
