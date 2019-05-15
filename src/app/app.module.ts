import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurProfileTourComponent } from './our-profile-tour/our-profile-tour.component';
import { OurTechnologiesComponent } from './our-technologies/our-technologies.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { FootterComponent } from './footter/footter.component';
import { HeaderService } from './services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurServiceComponent,
    OurProfileTourComponent,
    OurTechnologiesComponent,
    KnowMoreComponent,
    FootterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }