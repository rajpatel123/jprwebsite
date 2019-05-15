import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public slider=[];

  constructor( private slid:HeaderService ) { }

  ngOnInit() {
   
    this.slid.getdata().subscribe(data=>{
      console.log('data is---',data);
      this.slider=data["Slider Data"];
    })
  }

}
