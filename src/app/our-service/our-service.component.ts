import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/home.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  public OurService=[];

  constructor(private ourservice:HeaderService) { }

  ngOnInit() {
    this.ourservice.getdata().subscribe(data=>{
      this.OurService=data["Services"]
    })
  }


}
