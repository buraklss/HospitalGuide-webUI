import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';
import { Clinics } from 'src/app/model/clinics';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-listofclinicinhospital',
  templateUrl: './listofclinicinhospital.component.html',
  styleUrls: ['./listofclinicinhospital.component.css']
})
export class ListofclinicinhospitalComponent implements OnInit {

  constructor(private hos:HospitalService,
    private root:Router,private active: ActivatedRoute,private user:AuthService) {}
    hospitalid: number;
    clinics: Clinics[];
  ngOnInit() {
    this.active.params.subscribe(params => {
      this.gethospitalClinis(params["hospital"]);

      this.hospitalid = params["hospital"];});
  }

  court;
  gethospitalClinis(hosid) {
    this.hos.GetOneHospitalsClinics(hosid).subscribe(data => {
      this.clinics = data;
      this.court = this.clinics[0].hosname
    });
  }



  delete(id: number) {
    console.log("delete id :" + id);
    this.hos.delClinic(id)
    this.root.navigateByUrl("/process")
  }

  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
  get data() {
    if (this.clinics != null) {
      if (this.clinics.length <= 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
