import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';
import { Hospitals } from 'src/app/model/hospitals';
import { AuthService } from 'src/app/service/auth.service';
import { Users } from 'src/app/model/gellusers';
import { CommentModel } from 'src/app/model/commentModel';
import { RAteModel } from 'src/app/model/ratemodel';

@Component({
  selector: 'app-hospitaldetail',
  templateUrl: './hospitaldetail.component.html',
  styleUrls: ['./hospitaldetail.component.css']
})
export class HospitaldetailComponent implements OnInit {

  constructor(
    private hospital: HospitalService,
    private active: ActivatedRoute,
    private user: AuthService,
    private root: Router
  ) {}
  ngOnInit() {

    this.active.params.subscribe(params => { this.gethos(params["hosid"])
  this.hosid = params["hosid"]
  this.hospitalid = params["hosid"];
this.getrate(params["hosid"])})
  this.getuserid();
    console.log(this.hospitalid);
    this.getcomment(this.hospitalid);
    this.getrates(this.hospitalid);
    this.getuserinfo(this.userid);
    setTimeout(() => {
      this.startswrite();
    }, 500);
  }
  rate: number = 0;
  comment: any = {};
  hospitalid: number;
  userid: string;
  userr: Users;
  sonuc: number;
  sonuc1: any=[];
hos:Hospitals
hosid:number
comments: CommentModel[];
  starts: RAteModel;
  leng: number;
  map
  gethos(id){
    this.hospital.getoneHospital(id).subscribe(data=>{
      this.hos =data

      this.map =this.hos.harita
      console.log(data)
    })
  }

  getrate(hosid) {
    this.hospital.getRatevalue(hosid).subscribe(data => {
     this.hos.start = data;

     console.log(data);
   });
 }

 getcomment(hosid) {
  this.hospital.GetComment(hosid).subscribe(data => {
    this.comments = data;
    this.leng = data.length;
  });
}
getrates(hosid) {
  this.hospital.getRate(hosid).subscribe(data => {
    this.starts = data;
    console.log(data);
  });
}

startswrite() {

  var s11 = this.starts.star1
  var s22 = this.starts.star2 
  var s33= this.starts.star3  
  var s44 = this.starts.star4  
  var s55 = this.starts.star5 
var verilenoy = s11+s22+s33+s44+s55
  var s1 = (this.starts.star1 * 1) 
  var s2 = (this.starts.star2 * 2) 
  var s3 = (this.starts.star3 * 3) 
  var s4 = (this.starts.star4 * 4) 
  var s5 = (this.starts.star5 * 5) 
  var toplam = s1 + s2 + s3 + s4 + s5;

  this.sonuc = toplam /verilenoy
 

  if (this.sonuc >= 5.1) {
   this.sonuc =5
   console.log(this.sonuc)
  }
  for (let index = 0; index < this.sonuc; index++) {
    this.sonuc1[index] = index;
    console.log(this.sonuc1)
  }
}

addcomment() {
  var onecomment = new CommentModel();

  onecomment.hospitalid = parseInt(this.hospitalid.toString());
  onecomment.userid = parseInt(this.userid);
  onecomment.comment = this.comment.comment;
  console.log(this.rate);
  if (this.rate != 0) {
    this.hospital.addComment(onecomment);
    this.hospital.addRate(this.hospitalid, this.rate, this.userid);
    console.log("postt:");
    console.log(this.hospitalid);
    console.log( this.rate);
    console.log(this.userid);
    console.log(onecomment);
  } else {
    this.hospital.addComment(onecomment);
    console.log("no rate");
    console.log(onecomment);
  }
  this.root.navigateByUrl("/process")
}

getuserid() {
  this.userid = this.user.getcurrentuserid;
}
getuserinfo(id) {
  this.user.getuser(id).subscribe(data => {
    this.userr = data;
  });
}

onClick(rating: number): void {
  this.rate = rating;
  console.log(rating);
}
}
