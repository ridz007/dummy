import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-happydaysslide',
  templateUrl: './happydaysslide.component.html',
  styleUrls: ['./happydaysslide.component.css'],
  providers: [WindowRef, RouterService]
})
export class HappydaysslideComponent implements OnInit {

  windowsJson: string;
  constructor(private _windowRef: WindowRef, private _routerService: RouterService) { }

  ngOnInit() {
    this.windowsJson = this._windowRef.nativeWindow.firstSlideComponentJson;
  }

}
