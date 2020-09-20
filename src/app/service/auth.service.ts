import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";
//import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Registeruser } from "../model/registeruser";
import { Loginuser } from "../model/loginuser";
import { Observable } from "rxjs";
import { Countryclass } from "../model/countryclass";
import { ForgetPassword } from "../model/forgetpass";
import { ResetPasswordmodel } from "../model/resetPassword";
import { UpdateUser } from "../model/updateuser";
import { Users } from "../model/gellusers";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private root: Router,
    private alertify: AlertifyService
  ) {}

  path =environment.path + "Auth/";
  path2 = environment.path +"country/";
  path3 = environment.path 
  usertoken: any;
  admintoken: any;
  tokendecoder: any;
  tokendecoderadmin: any;
  jwthelper: JwtHelperService = new JwtHelperService();
  tokenkey = "HG-token-334";
  userkey = "HGUserİD-334";
  admintokenkey = "HG-Admintoken-334";
  adminuserkey = "HGAdminİD-334";

  getuser(id: number) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get<Users>(this.path + "GetUser?id=" + id);
  }
  deleteuser(id: number) {
    //headers a bak
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http.delete(this.path + "userdelete?id=" + id).subscribe(data => {
      this.alertify.error("User is deleted.");
      this.root.navigateByUrl("/userlist");
    });
  }
  getAllUsers():Observable<Users[]> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get<Users[]>(this.path + "GetAllUsers");
  }
  updateuser(profile: UpdateUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    if (profile.Password == null) {
      this.http
        .put(this.path + "userupdate?pass=0", profile, { headers: headers })
        .subscribe(data => {
          this.alertify.success("Update is successful");
          this.root.navigateByUrl("/profile");
        });
    } else {
      this.http
        .put(this.path + "userupdate?pass=" + profile.Password, profile, {
          headers: headers
        })
        .subscribe(data => {
          this.alertify.success("Update is successful");
          this.root.navigateByUrl("/profile");
        });
    }
  }

  resetPassword(resetPassword: ResetPasswordmodel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get<Boolean>(
      this.path +
        "ResertPassword?mail=" +
        resetPassword.Mail +
        "&pass=" +
        resetPassword.Password
    );
  }

  forgotpassword(forgotpass: ForgetPassword) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get<Boolean>(
      this.path + "ForgetPassword?mail=" + forgotpass.Mail
    );
  }

  register(registeruser: Registeruser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "register", registeruser, { headers: headers })
      .subscribe(data => {
        this.alertify.success("User register is successful");
        this.root.navigateByUrl("/homepage");
      });
  }
  login(loginuser: Loginuser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "login", loginuser, { headers: headers })
      .subscribe(data => {
        this.usertoken = data;
        var userinfo = this.usertoken.split("?", 2);

        this.savetoken(userinfo[0], userinfo[1]);
        this.tokendecoder = this.jwthelper.decodeToken(userinfo[0].toString());
       
        this.alertify.success("Login is successfull");
        this.root.navigateByUrl("/homepage");
      });
  }

  adminlogin(loginuser: Loginuser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "Adminlogin", loginuser, { headers: headers })
      .subscribe(data => {
        this.admintoken = data;
        var userinfo = this.admintoken.split("?", 2);
        console.log(userinfo)
        this.savetokenadmin(userinfo[0], userinfo[1]);
        this.tokendecoderadmin = this.jwthelper.decodeToken(userinfo[0].toString());
       
        this.alertify.success("Login is successfull");
        this.root.navigateByUrl("/dashboard");
      });
  }


  logout() {
    localStorage.removeItem(this.tokenkey);
    localStorage.removeItem(this.userkey);
    this.alertify.warning("Logged OUT!!!");
    this.root.navigateByUrl("/homepage");
  }
  logoutadmin() {
    localStorage.removeItem(this.admintokenkey);
    localStorage.removeItem(this.adminuserkey);
    this.alertify.warning("Logged OUT!!!");
    this.root.navigateByUrl("/admin");
  }

  savetoken(token, userid) {
    localStorage.setItem(this.tokenkey, token);
    localStorage.setItem(this.userkey, userid);
  }
  savetokenadmin(token, userid) {
    localStorage.setItem(this.admintokenkey, token);
    localStorage.setItem(this.adminuserkey, userid);
  }
  loggedin() {
    return this.jwthelper.isTokenExpired(this.gettoken);
  }

  get gettoken() {
    return localStorage.getItem(this.tokenkey);
  }
  get getuserid() {
    return localStorage.getItem(this.userkey);
  }

  get getcurrentuserid() {
    return this.jwthelper.decodeToken(this.gettoken).nameid;
  }

  get getcurrentusermail() {
    return this.jwthelper.decodeToken(this.gettoken).unique_name;
  }


  loggedinadmin() {
    return this.jwthelper.isTokenExpired(this.gettokenadmin);
  }

  get gettokenadmin() {
    return localStorage.getItem(this.admintokenkey);
  }
  get getadminid() {
    return localStorage.getItem(this.adminuserkey);
  }

  get getcurrentadminid() {
    return this.jwthelper.decodeToken(this.gettokenadmin).nameid;
  }

  get getcurrentuadminail() {
    return this.jwthelper.decodeToken(this.gettokenadmin).unique_name;
  }

  getcountry(): Observable<Countryclass[]> {
    return this.http.get<Countryclass[]>(this.path2 + "cinfo");
  }

  SystemisActive(): Observable<Boolean> {
    return this.http.get<Boolean>(this.path3 + "isActive/is");
  }
}
