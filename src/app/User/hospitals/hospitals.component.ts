import { Component, OnInit } from "@angular/core";
import { HospitalService } from "src/app/service/hospital.service";
import { ActivatedRoute } from "@angular/router";
import { Hospitals } from "src/app/model/hospitals";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { RAteModel } from "src/app/model/ratemodel";

@Component({
  selector: "app-hospitals",
  templateUrl: "./hospitals.component.html",
  styleUrls: ["./hospitals.component.css"]
})
export class HospitalsComponent implements OnInit {
  constructor(
    private hospital: HospitalService,
    private active: ActivatedRoute
  ) {}

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.gethospitalincities(params["cities"]);
      this.city = params["cities"]
    });
  }
  i: number = 0;
  j: number = 0;
  starts: RAteModel;
  hospitals: Hospitals[];
  sonuc: number;
  sonuc1: any = [];
  search:any ={}
  serachdata:Hospitals[];
city




  serachcity() {
    this.hospital
      .searchhospital(this.search.hospital,this.city)
      .subscribe(data => {
        this.serachdata = data;
    
        data.forEach( element => {
        
          this.getrateserach(element.id, this.j);
       this.j++;
     });

     this.j = 0
      });
  }

  get dataserch() {
    if (this.serachdata != null || this.serachdata != undefined) {
      if (this.serachdata.length >= 0) {
   
        return false;
      } else {
   
        return true;
      }
    }

    return true;
  }

   gethospitalincities(cities) {
     this.hospital.getCityInHospitals(cities).subscribe( data => {
      this.hospitals = data;
      
      data.forEach( element => {
        
           this.getrate(element.id, this.i);
        this.i++;
      });
    });
  }
  getrateserach(hosid, i) {
    this.hospital.getRatevalue(hosid).subscribe(data => {

     this.serachdata[i].start = data;
 
   });
 }
   getrate(hosid, i) {
     this.hospital.getRatevalue(hosid).subscribe(data => {
      this.hospitals[i].start = data;
 
   
    });
  }
  startswrite() {
    var s11 = this.starts.star1;
    var s22 = this.starts.star2;
    var s33 = this.starts.star3;
    var s44 = this.starts.star4;
    var s55 = this.starts.star5;
    var verilenoy = s11 + s22 + s33 + s44 + s55;
    var s1 = this.starts.star1 * 1;
    var s2 = this.starts.star2 * 2;
    var s3 = this.starts.star3 * 3;
    var s4 = this.starts.star4 * 4;
    var s5 = this.starts.star5 * 5;
    var toplam = s1 + s2 + s3 + s4 + s5;

    this.sonuc = toplam / verilenoy;

    if (this.sonuc >= 5.1) {
      this.sonuc = 5;
      
    }
    for (let index = 0; index < this.sonuc; index++) {
      this.sonuc1[index] = index;
   
    }
  }
  get data() {
    if (this.hospitals != null) {
      if (this.hospitals.length <= 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
