import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-clinicslist',
  templateUrl: './clinicslist.component.html',
  styleUrls: ['./clinicslist.component.css']
})
export class ClinicslistComponent implements OnInit {

  constructor(private hos:HospitalService,
    private root:Router
    ,private user:AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.hos.getClinics().subscribe(data => {
      this.court = data;
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
}
