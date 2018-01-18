import { RouterService } from './../shared/routerService';
import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';

@Component({
  selector: 'app-second-slide',
  templateUrl: './secondSlide.component.html',
  styleUrls: ['./secondSlide.component.css'],
  providers: [WindowRef, RouterService]
})
export class SecondSlideComponent implements OnInit {
  windowsJson: string;
  constructor(private _windowRef: WindowRef, private _routerService: RouterService) { }

  ngOnInit() {
    this.windowsJson = this._windowRef.nativeWindow.firstSlideComponentJson;
  }

  getUrlParams() {
    this._routerService.fetchPath();
  }

}
