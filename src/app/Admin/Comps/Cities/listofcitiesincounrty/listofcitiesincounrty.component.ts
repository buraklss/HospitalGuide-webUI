import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from 'src/app/service/countryservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cities } from 'src/app/model/Cities';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-listofcitiesincounrty',
  templateUrl: './listofcitiesincounrty.component.html',
  styleUrls: ['./listofcitiesincounrty.component.css']
})
export class ListofcitiesincounrtyComponent implements OnInit {

  constructor(private counrty: CountryserviceService,
    private activatedroute:ActivatedRoute,
    private root:Router
    ,private user:AuthService) {}

  ngOnInit() {
 
    this.activatedroute.params.subscribe(params=>{this.getcities(params["country"])})
     
  }
  court;
  cities:Cities[]
 
  getcities(country){
    this.counrty.getcities(country).subscribe(data=>{
      this.cities=data
    })
  }
  delete(id: number) {
    console.log("delete id :" + id);
    this.counrty.deletedecities(id)
    this.root.navigateByUrl("/process")
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
}
