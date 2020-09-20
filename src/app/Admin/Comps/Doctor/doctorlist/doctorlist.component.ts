import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {

  constructor(private day:HospitalService,
    private root:Router,private user:AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.day.getAllDoctors().subscribe(data => {
      this.court = data;
    });
  }

  delete(id: number) {
    console.log("delete id :" + id);
    this.day.deldoctor(id)
    this.root.navigateByUrl("/process")
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
}
