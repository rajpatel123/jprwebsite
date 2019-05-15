import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/home.service';

@Component({
  selector: 'app-our-profile-tour',
  templateUrl: './our-profile-tour.component.html',
  styleUrls: ['./our-profile-tour.component.css']
})
export class OurProfileTourComponent implements OnInit {

  public OurProfileTour=[];
  constructor(private profile:HeaderService ) { }

  ngOnInit() {
    this.profile.getdata().subscribe(data=>{
      this.OurProfileTour=data["Videos"];
    })
  }

}
