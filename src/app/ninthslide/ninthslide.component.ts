import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-ninthslide',
  templateUrl: './ninthslide.component.html',
  styleUrls: ['./ninthslide.component.css'],
  providers: [WindowRef, RouterService]
  
})
export class NinthslideComponent implements OnInit {

  windowJSON: string;
  constructor(private _windowsref: WindowRef, private routerService: RouterService) { }

  ngOnInit() {
    this.windowJSON = this._windowsref.nativeWindow.firstSlideComponentJson;
  }
  getUrlParams() {
    this.routerService.fetchPath();
  }

}
