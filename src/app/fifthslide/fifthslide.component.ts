import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-fifthslide',
  templateUrl: './fifthslide.component.html',
  styleUrls: ['./fifthslide.component.css'],
  providers: [WindowRef, RouterService]
})
export class FifthslideComponent implements OnInit {

  windowJSON: string;
  constructor(private _windowRef: WindowRef, private _routerservice: RouterService) { }

  ngOnInit() {
    this.windowJSON = this._windowRef.nativeWindow.firstSlideComponentJson;
  }
getUrlParams() {
  this._routerservice.fetchPath();
}
}
