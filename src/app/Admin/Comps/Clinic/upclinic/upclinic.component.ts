import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-upclinic',
  templateUrl: './upclinic.component.html',
  styleUrls: ['./upclinic.component.css']
})
export class UpclinicComponent implements OnInit {

  constructor(
    private root: Router,
    private county: HospitalService,
    private authservice: AuthService,
    private activeRoute: ActivatedRoute
  ) {}



  country: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
   
  }

  getdata(id) {
    this.county.getoneClinic(id).subscribe(data => {
      this.country = data;
      console.log(data);
    });
  }

  postcountry() {
    this.county.upClinic(this.country);
    console.log(this.country.id);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }

}
