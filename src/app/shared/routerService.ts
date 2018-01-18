import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {
    constructor(private _router: Router) {
    }
    fetchPath() {

        switch (window.location.pathname) {

            case '/firstSlide':
                this._router.navigate(['secondSlide']);
                break;
            case '/secondSlide':
                this._router.navigate(['thirdSlide']);
                break;
            case '/thirdSlide':
                this._router.navigate(['fourthSlide']);
                break;
            case '/fourthSlide':
                this._router.navigate(['fifthSlide']);
                break;
            case '/fifthSlide':
                this._router.navigate(['sixthSlide']);
                break;
            case '/sixthSlide':
                this._router.navigate(['seventhSlide']);
                break;
            case '/seventhSlide':
                this._router.navigate(['eightSlide']);
                break;
            case '/eightSlide':
                this._router.navigate(['ninthSlide']);
                break;
            case '/ninthSlide':
                this._router.navigate(['tenthSlide']);
                break;
            case '/tenthSlide':
                this._router.navigate(['quiz1']);
                break;
            case '/quiz1':
                this._router.navigate(['quiz2']);
                break;
            case '/quiz2':
                this._router.navigate(['quiz3']);
                break;
            case '/quiz3':
                this._router.navigate(['quiz4']);
                break;
            case '/quiz4':
                this._router.navigate(['quiz5']);
                break;
            case '/quiz5':
                this._router.navigate(['thanks']);
                break;
            case '/thanks':
                this._router.navigate(['tips1']);
                break;
            case '/tips1':
                this._router.navigate(['tips2']);
                break;
            case '/tips2':
                this._router.navigate(['happy']);
                break;
            default:
                break;
        }
    }
}
