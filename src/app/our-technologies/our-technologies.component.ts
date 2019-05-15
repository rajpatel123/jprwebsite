import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/home.service';

@Component({
  selector: 'app-our-technologies',
  templateUrl: './our-technologies.component.html',
  styleUrls: ['./our-technologies.component.css']
})
export class OurTechnologiesComponent implements OnInit {

  public Technology=[];

  constructor(private tecnology:HeaderService) { }

  ngOnInit() {
   this.tecnology.getdata().subscribe(data=>{
     this.Technology=data["Technologies"];
   })
  }

}
