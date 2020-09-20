import { Component, OnInit } from "@angular/core";
import { HospitalService } from "src/app/service/hospital.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { Users } from "src/app/model/gellusers";
import { RAteModel } from "src/app/model/ratemodel";
import { CommentModel } from "src/app/model/commentModel";

@Component({
  selector: "app-listofcommentinhos",
  templateUrl: "./listofcommentinhos.component.html",
  styleUrls: ["./listofcommentinhos.component.css"]
})
export class ListofcommentinhosComponent implements OnInit {
  constructor(
    private hos: HospitalService,
    private root: Router,
    private hospital: HospitalService,
    private active: ActivatedRoute,
    private user: AuthService
  ) {}
  rate: number = 0;
  comment: any = {};
  hospitalid: number;
  
  comments: CommentModel[];
  
  ngOnInit() {

    this.active.params.subscribe(params => {

      this.hospitalid = params["hosid"];
    });

    this.getcomment(this.hospitalid);

  }
  court;

  
  getcomment(hosid) {
    this.hospital.GetComment(hosid).subscribe(data => {
      this.court = data;
       console.log(data);
    });
  }
 
  delete(id: number) {
    console.log("delete id :" + id);
    this.hos.delComment(id);
    this.root.navigateByUrl("/process");
  }
  get userauthentication()
  {
    return this.user.loggedinadmin();
  }
}
