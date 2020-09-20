import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-commentlist',
  templateUrl: './commentlist.component.html',
  styleUrls: ['./commentlist.component.css']
})
export class CommentlistComponent implements OnInit {


  constructor(private hos:HospitalService,
    private root:Router,
    private user:AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.hos.GetAllComment().subscribe(data => {
      this.court = data;
    });
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
  delete(id: number) {
    console.log("delete id :" + id);
    this.hos.delComment(id)
    this.root.navigateByUrl("/process")
  }

}
