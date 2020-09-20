import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from 'src/app/service/countryservice.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  constructor(private con:CountryserviceService,
    private root:Router,private user:AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.con.getcountry().subscribe(data => {
      this.court = data;
    });
  }

  delete(id: number) {
    console.log("delete id :" + id);
    this.con.deleteCountry(id)
    this.root.navigateByUrl("/process")
  }
  get userauthentication()
  {
    return this.user.loggedinadmin();
  }
}
