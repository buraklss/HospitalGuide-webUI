import { Routes } from "@angular/router";
import { LoginComponent } from "./User/login/login.component";
import { AnasayfaComponent } from "./User/anasayfa/anasayfa.component";
import { RegisterComponent } from "./User/register/register.component";
import { CitiesComponent } from "./User/cities/cities.component";
import { ForgetPasswordComponent } from "./User/forgetPassword/forgetPassword.component";
import { ResetPasswordComponent } from "./User/resetPassword/resetPassword.component";
import { ProfileComponent } from "./User/profile/profile.component";
import { HospitalsComponent } from "./User/hospitals/hospitals.component";
import { ContactComponent } from "./User/contact/contact.component";
import { ClinicsComponent } from "./User/clinics/clinics.component";
import { ErrorPageComponent } from "./GeneralComp/ErrorPage/ErrorPage.component";
import { DashboardComponent } from "./Admin/dashboard/dashboard.component";
import { AloginComponent } from "./Admin/alogin/alogin.component";
import { CountrylistComponent } from "./Admin/Comps/Countries/countrylist/countrylist.component";
import { AddcountriesComponent } from "./Admin/Comps/Countries/addcountries/addcountries.component";
import { UppcountryComponent } from "./Admin/Comps/Countries/uppcountry/uppcountry.component";
import { CitieslistComponent } from "./Admin/Comps/Cities/citieslist/citieslist.component";
import { AddcitiesComponent } from "./Admin/Comps/Cities/addcities/addcities.component";
import { UpclinicComponent } from "./Admin/Comps/Clinic/upclinic/upclinic.component";
import { UpcitiesComponent } from "./Admin/Comps/Cities/upcities/upcities.component";
import { HospitallistComponent } from "./Admin/Comps/Hospital/hospitallist/hospitallist.component";
import { AddhospitalComponent } from "./Admin/Comps/Hospital/addhospital/addhospital.component";
import { UphospitalsComponent } from "./Admin/Comps/Hospital/uphospitals/uphospitals.component";
import { ClinicslistComponent } from "./Admin/Comps/Clinic/clinicslist/clinicslist.component";
import { AddclinicComponent } from "./Admin/Comps/Clinic/addclinic/addclinic.component";
import { DoctorlistComponent } from "./Admin/Comps/Doctor/doctorlist/doctorlist.component";
import { AdddoctorComponent } from "./Admin/Comps/Doctor/adddoctor/adddoctor.component";
import { UpdoctorComponent } from "./Admin/Comps/Doctor/updoctor/updoctor.component";
import { DayslistComponent } from "./Admin/Comps/Days/dayslist/dayslist.component";
import { AdddaysComponent } from "./Admin/Comps/Days/adddays/adddays.component";
import { UpdaysComponent } from "./Admin/Comps/Days/updays/updays.component";
import { HourslistComponent } from "./Admin/Comps/Hours/hourslist/hourslist.component";
import { AddhourComponent } from "./Admin/Comps/Hours/addhour/addhour.component";
import { UphourComponent } from "./Admin/Comps/Hours/uphour/uphour.component";
import { UserlistComponent } from "./Admin/Comps/User/userlist/userlist.component";
import { CommentlistComponent } from "./Admin/Comps/comment/commentlist/commentlist.component";
import { ListofcitiesincounrtyComponent } from "./Admin/Comps/Cities/listofcitiesincounrty/listofcitiesincounrty.component";
import { ListofhospitalincitiesComponent } from "./Admin/Comps/Hospital/listofhospitalincities/listofhospitalincities.component";
import { ListofclinicinhospitalComponent } from "./Admin/Comps/Clinic/listofclinicinhospital/listofclinicinhospital.component";
import { ListofdoctorsinclinicsComponent } from "./Admin/Comps/Doctor/listofdoctorsinclinics/listofdoctorsinclinics.component";
import { ListofdaysindoctorComponent } from "./Admin/Comps/Days/listofdaysindoctor/listofdaysindoctor.component";
import { ListofhoursindaysidComponent } from "./Admin/Comps/Hours/listofhoursindaysid/listofhoursindaysid.component";
import { ListofcommentinhosComponent } from "./Admin/Comps/comment/listofcommentinhos/listofcommentinhos.component";
import { HospitaldetailComponent } from "./User/hospitaldetail/hospitaldetail.component";
import { ProcessComponent } from "./GeneralComp/process/process.component";
import { AddotohourComponent } from "./Admin/Comps/Hours/addotohour/addotohour.component";

export const Root: Routes = [
  //user root
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: AnasayfaComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "cities/:country", component: CitiesComponent },
  { path: "forgetpassword", component: ForgetPasswordComponent },
  { path: "resetpassword/:mail", component: ResetPasswordComponent },
  { path: "profile", component: ProfileComponent },
  { path: "hospitals/:cities", component: HospitalsComponent },
  { path: "contact", component: ContactComponent },
  { path: "clinics/:hosid", component: ClinicsComponent },
  { path: "hosdetail/:hosid", component: HospitaldetailComponent },

  //admin root
  { path: "dashboard", component: DashboardComponent },
  { path: "admin", component: AloginComponent },

  { path: "countrylist", component: CountrylistComponent },
  { path: "addcounrty", component: AddcountriesComponent },
  { path: "uppcounrty/:id", component: UppcountryComponent },
  { path: "citieslist", component: CitieslistComponent },
  { path: "addcities", component: AddcitiesComponent },
  { path: "upcities/:id", component: UpcitiesComponent },
  { path: "hospitallist", component: HospitallistComponent },
  { path: "addhospital", component: AddhospitalComponent },
  { path: "uphospital/:id", component: UphospitalsComponent },
  { path: "cliniclist", component: ClinicslistComponent },
  { path: "addclinic", component: AddclinicComponent },
  { path: "upclinic/:id", component: UpclinicComponent },
  { path: "doctorlist", component: DoctorlistComponent },
  { path: "adddoctor", component: AdddoctorComponent },
  { path: "updoctor/:id", component: UpdoctorComponent },
  { path: "dayslist", component: DayslistComponent },
  { path: "addday", component: AdddaysComponent },
  { path: "upday/:id", component: UpdaysComponent },
  { path: "hourslist", component: HourslistComponent },
  { path: "addhour", component: AddhourComponent },
  { path: "uphour/:id", component: UphourComponent },
  { path: "userlist", component: UserlistComponent },
  { path: "commentlist", component: CommentlistComponent },
  { path: "listofcities/:country", component: ListofcitiesincounrtyComponent },
  {
    path: "listofhospitals/:cities",
    component: ListofhospitalincitiesComponent
  },
  {
    path: "listofclinics/:hospital",
    component: ListofclinicinhospitalComponent
  },
  {
    path: "listofdoctors/:hosid/:clinicid",
    component: ListofdoctorsinclinicsComponent
  },
  {
    path: "listofdoctorsdays/:doctorid",
    component: ListofdaysindoctorComponent
  },
  {
    path: "listofdoctorshours/:dayid",
    component: ListofhoursindaysidComponent
  },
  {
    path: "listofcommentinhospital/:hosid",
    component: ListofcommentinhosComponent
  },
  {path:"addotohour", component:AddotohourComponent},

  //error page
  { path: "process", component: ProcessComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];
