import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { Router } from '@angular/router';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-secondtipsslide',
  templateUrl: './secondtipsslide.component.html',
  styleUrls: ['./secondtipsslide.component.css'],
  providers: [WindowRef, RouterService]
})
export class SecondtipsslideComponent implements OnInit {

  windowsJson: any;
  constructor(private _windowRef: WindowRef, private _routerService: RouterService, private _router: Router) {
  }
  ngOnInit() {
      this.windowsJson = this._windowRef.nativeWindow.firstSlideComponentJson;
  }
  getUrlParams() {
      this._routerService.fetchPath();
  }

}
