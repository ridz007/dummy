import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { Router } from '@angular/router';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-firsttipsslide',
  templateUrl: './firsttipsslide.component.html',
  styleUrls: ['./firsttipsslide.component.css'],
  providers: [WindowRef, RouterService]
})
export class FirsttipsslideComponent implements OnInit {
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
