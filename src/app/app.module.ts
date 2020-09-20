import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule,Router } from '@angular/router';
import { Root } from './root';
import { HttpClientModule } from '@angular/common/http'
import { AlertifyService } from './service/alertify.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './User/login/login.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { FootComponent } from './User/foot/foot.component';
import { AnasayfaComponent } from './User/anasayfa/anasayfa.component';
import { RegisterComponent } from './User/register/register.component';
import { CitiesComponent } from './User/cities/cities.component';
import { ForgetPasswordComponent } from './User/forgetPassword/forgetPassword.component';
import { AdminFootComponent } from './Admin/adminFoot/adminFoot.component';
import { AdminNavbarComponent } from './Admin/adminNavbar/adminNavbar.component';
import { ResetPasswordComponent } from './User/resetPassword/resetPassword.component';
import { ProfileComponent } from './User/profile/profile.component';
import { HospitalsComponent } from './User/hospitals/hospitals.component';
import { ContactComponent } from './User/contact/contact.component';
import { ClinicsComponent } from './User/clinics/clinics.component';
import { JustHoursPipe } from './Pipes/justHours.pipe';
import { ErrorPageComponent } from './GeneralComp/ErrorPage/ErrorPage.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AloginComponent } from './Admin/alogin/alogin.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CountrylistComponent } from './Admin/Comps/Countries/countrylist/countrylist.component';
import { AddcitiesComponent } from './Admin/Comps/Cities/addcities/addcities.component';
import { AddclinicComponent } from './Admin/Comps/Clinic/addclinic/addclinic.component';
import { AddcountriesComponent } from './Admin/Comps/Countries/addcountries/addcountries.component';
import { AdddaysComponent } from './Admin/Comps/Days/adddays/adddays.component';
import { AdddoctorComponent } from './Admin/Comps/Doctor/adddoctor/adddoctor.component';
import { AddhospitalComponent } from './Admin/Comps/Hospital/addhospital/addhospital.component';
import { AddhourComponent } from './Admin/Comps/Hours/addhour/addhour.component';
import { UpclinicComponent } from './Admin/Comps/Clinic/upclinic/upclinic.component';
import { UpdaysComponent } from './Admin/Comps/Days/updays/updays.component';
import { UpdoctorComponent } from './Admin/Comps/Doctor/updoctor/updoctor.component';
import { UphospitalsComponent } from './Admin/Comps/Hospital/uphospitals/uphospitals.component';
import { UphourComponent } from './Admin/Comps/Hours/uphour/uphour.component';
import { UppcountryComponent } from './Admin/Comps/Countries/uppcountry/uppcountry.component';
import { CitieslistComponent } from './Admin/Comps/Cities/citieslist/citieslist.component';
import { HospitallistComponent } from './Admin/Comps/Hospital/hospitallist/hospitallist.component';
import { DoctorlistComponent } from './Admin/Comps/Doctor/doctorlist/doctorlist.component';
import { DayslistComponent } from './Admin/Comps/Days/dayslist/dayslist.component';
import { HourslistComponent } from './Admin/Comps/Hours/hourslist/hourslist.component';
import { UserlistComponent } from './Admin/Comps/User/userlist/userlist.component';
import { ClinicslistComponent } from './Admin/Comps/Clinic/clinicslist/clinicslist.component';
import { UpcitiesComponent } from './Admin/Comps/Cities/upcities/upcities.component';
import { CommentlistComponent } from './Admin/Comps/comment/commentlist/commentlist.component';
import { ListofcitiesincounrtyComponent } from './Admin/Comps/Cities/listofcitiesincounrty/listofcitiesincounrty.component';
import { ListofhospitalincitiesComponent } from './Admin/Comps/Hospital/listofhospitalincities/listofhospitalincities.component';
import { ListofclinicinhospitalComponent } from './Admin/Comps/Clinic/listofclinicinhospital/listofclinicinhospital.component';
import { ListofdoctorsinclinicsComponent } from './Admin/Comps/Doctor/listofdoctorsinclinics/listofdoctorsinclinics.component';
import { ListofdaysindoctorComponent } from './Admin/Comps/Days/listofdaysindoctor/listofdaysindoctor.component';
import { ListofhoursindaysidComponent } from './Admin/Comps/Hours/listofhoursindaysid/listofhoursindaysid.component';
import { ListofcommentinhosComponent } from './Admin/Comps/comment/listofcommentinhos/listofcommentinhos.component';
import { HospitaldetailComponent } from './User/hospitaldetail/hospitaldetail.component';
import { HtmlPipe } from './Pipes/html.pipe';
import { ProcessComponent } from './GeneralComp/process/process.component';
import { AddotohourComponent } from './Admin/Comps/Hours/addotohour/addotohour.component';


@NgModule({
   declarations: [
      AppComponent,

      //user com
      NavbarComponent,
      FootComponent,
      AnasayfaComponent,
      RegisterComponent,
      LoginComponent,
      CitiesComponent,
      ForgetPasswordComponent,
      ResetPasswordComponent,
      ProfileComponent,
      HospitalsComponent,
      ContactComponent,
      ClinicsComponent,

      HospitaldetailComponent,

      //pipes
      JustHoursPipe,
      HtmlPipe,
      //general
      ErrorPageComponent,
      ProcessComponent,

      //admin com
      AdminFootComponent,
      AdminNavbarComponent,
      AloginComponent,
      DashboardComponent,
      CountrylistComponent,
      CitieslistComponent,
      HospitallistComponent,
      DoctorlistComponent,
      DayslistComponent,
      HourslistComponent,
      UserlistComponent,
      ClinicslistComponent,
      AddcitiesComponent,
      AddclinicComponent,
      AddcountriesComponent,
      AdddaysComponent,
      AdddoctorComponent,
      AddhospitalComponent,
      AddhourComponent,
      UpclinicComponent,
      UpcitiesComponent,
      UpdaysComponent,
      UpdoctorComponent,
      UphospitalsComponent,
      UphourComponent,
      UppcountryComponent,
      CommentlistComponent,
      ListofcitiesincounrtyComponent,
      ListofhospitalincitiesComponent,
      ListofclinicinhospitalComponent,
      ListofdoctorsinclinicsComponent,
      ListofdaysindoctorComponent,
      ListofhoursindaysidComponent,
      ListofcommentinhosComponent,
      AddotohourComponent,
      
      
      
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(Root),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgxSpinnerModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
