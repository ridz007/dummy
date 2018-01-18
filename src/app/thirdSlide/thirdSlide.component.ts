import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-third-slide',
  templateUrl: './thirdSlide.component.html',
  styleUrls: ['./thirdSlide.component.css'],
  providers: [WindowRef, RouterService]
})
export class ThirdSlideComponent implements OnInit {
 windowJSON: string;
  constructor(private _windowsref: WindowRef, private routerService: RouterService) { }

  ngOnInit() {
    this.windowJSON = this._windowsref.nativeWindow.firstSlideComponentJson;
  }
  getUrlParams() {
    this.routerService.fetchPath();
  }
}
