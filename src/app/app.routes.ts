import { HappydaysslideComponent } from './happydaysslide/happydaysslide.component';
import { SecondtipsslideComponent } from './secondtipsslide/secondtipsslide.component';
import { FirsttipsslideComponent } from './firsttipsslide/firsttipsslide.component';
import { SecondSlideComponent } from './secondSlide/secondSlide.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './firstSlide/firstSlide.component';
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
import { ThanksComponent } from './thanks/thanks.component';
import { Quiz4Component } from './quiz4/quiz4.component';
import { Quiz5Component } from './quiz5/quiz5.component';

const routes: Routes = [
{path: '', redirectTo: '/firstSlide', pathMatch: 'full'},
{path: 'firstSlide' , component: FirstComponent},
{path: 'secondSlide', component: SecondSlideComponent},
{path: 'thirdSlide' , component: ThirdSlideComponent},
{path: 'fourthSlide' , component: FourthslideComponent},
{path: 'fifthSlide' , component: FifthslideComponent},
{path: 'sixthSlide' , component: SixthslideComponent},
{path: 'seventhSlide' , component: SeventhslideComponent},
{path: 'eightSlide' , component: EigthslideComponent},
{path: 'ninthSlide' , component: NinthslideComponent},
{path: 'tenthSlide' , component: TenthslideComponent},
{path: 'quiz1' , component: Quiz1Component},
{path: 'quiz2' , component: Quiz2Component},
{path: 'quiz3' , component: Quiz3Component},
{path: 'quiz4' , component: Quiz4Component},
{path: 'quiz5' , component: Quiz5Component},
{path: 'thanks' , component: ThanksComponent},
{path: 'tips1' , component: FirsttipsslideComponent},
{path: 'tips2' , component: SecondtipsslideComponent},
{path: 'happy' , component: HappydaysslideComponent},
// {path: 'twelvethSlide' , component: FourthslideComponent}

];
export const routing = RouterModule.forRoot(routes);
