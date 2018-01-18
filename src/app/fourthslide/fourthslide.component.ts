import { RouterService } from './../shared/routerService';
import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';

@Component({
  selector: 'app-fourthslide',
  templateUrl: './fourthslide.component.html',
  styleUrls: ['./fourthslide.component.css'],
  providers: [WindowRef, RouterService]
})
export class FourthslideComponent implements OnInit {
  windowJSON: string;
  constructor(private _windowRef: WindowRef, private _routerservice: RouterService) { }

  ngOnInit() {
    this.windowJSON = this._windowRef.nativeWindow.firstSlideComponentJson;
  }
getUrlParams() {
  this._routerservice.fetchPath();
}
}
