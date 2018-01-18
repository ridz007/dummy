import { FirstComponent } from './firstSlide/firstSlide.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SecondSlideComponent } from './secondSlide/secondSlide.component';
import { routing } from './app.routes';
import { ThirdSlideComponent } from './thirdSlide/thirdSlide.component';
import { FourthslideComponent } from './fourthslide/fourthslide.component';
import { FifthslideComponent } from './fifthslide/fifthslide.component';
import { SixthslideComponent } from './sixthslide/sixthslide.component';
import { SeventhslideComponent } from './seventhslide/seventhslide.component';
import { EigthslideComponent } from './eigthslide/eigthslide.component';
import { NinthslideComponent } from './ninthslide/ninthslide.component';
import { TenthslideComponent } from './tenthslide/tenthslide.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Quiz3Component } from './quiz3/quiz3.component';
import { Quiz4Component } from './quiz4/quiz4.component';
import { Quiz5Component } from './quiz5/quiz5.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FirsttipsslideComponent } from './firsttipsslide/firsttipsslide.component';
import { SecondtipsslideComponent } from './secondtipsslide/secondtipsslide.component';
import { HappydaysslideComponent } from './happydaysslide/happydaysslide.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondSlideComponent,
    ThirdSlideComponent,
    FourthslideComponent,
    FifthslideComponent,
    SixthslideComponent,
    SeventhslideComponent,
    EigthslideComponent,
    NinthslideComponent,
    TenthslideComponent,
    Quiz1Component,
    Quiz2Component,
    Quiz3Component,
    Quiz4Component,
    Quiz5Component,
    ThanksComponent,
    FirsttipsslideComponent,
    SecondtipsslideComponent,
    HappydaysslideComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
