import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hospitals } from 'src/app/model/hospitals';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-listofhospitalincities',
  templateUrl: './listofhospitalincities.component.html',
  styleUrls: ['./listofhospitalincities.component.css']
})
export class ListofhospitalincitiesComponent implements OnInit {
  constructor(private day:HospitalService,
    private root:Router,
    private active: ActivatedRoute,private user:AuthService) {}

  ngOnInit() {
   
    this.active.params.subscribe(params => {
      this.gethospitalincities(params["cities"]);
    });
  }
  court: Hospitals[];

 

  delete(id: number) {
    console.log("delete id :" + id);
    this.day.delHospital(id)
    this.root.navigateByUrl("/process")
  }


  gethospitalincities(cities) {
    this.day.getCityInHospitals(cities).subscribe(data => {
      this.court = data;
    });
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
  get data() {
    if (this.court != null) {
      if (this.court.length <= 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
