import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-eigthslide',
  templateUrl: './eigthslide.component.html',
  styleUrls: ['./eigthslide.component.css'],
  providers: [WindowRef, RouterService]
})
export class EigthslideComponent implements OnInit {

  windowJSON: string;
  constructor(private _windowRef: WindowRef, private _routerservice: RouterService) { }

  ngOnInit() {
    this.windowJSON = this._windowRef.nativeWindow.firstSlideComponentJson;
  }
getUrlParams() {
  this._routerservice.fetchPath();
}

}
