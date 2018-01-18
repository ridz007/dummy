import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../shared/windowRef';
import { RouterService } from '../shared/routerService';

@Component({
  selector: 'app-quiz3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.css'],
  providers: [WindowRef, RouterService]
})
export class Quiz3Component implements OnInit {

  isWrongAnswer: boolean;
  windowJSON: string;
  demoJSON: any;
  arrayOption: any;
  checkImageArray: any = [];
  answerId: number;
  currentCheckBox: number = -1;
  showModal: boolean;

  constructor(private _windowRef: WindowRef, private _routerservice: RouterService) {
    this.demoJSON = {
      'checkboxImage': 'assets/images/checkwhite.svg',
  };
   }

  ngOnInit() {

    this.windowJSON = this._windowRef.nativeWindow.firstSlideComponentJson;
    this.arrayOption = this._windowRef.nativeWindow.firstSlideComponentJson.quiz3Options;
    this.answerId = Number(this._windowRef.nativeWindow.firstSlideComponentJson.quiz3Ans);
    let i;
    for (i = 0; i < this.arrayOption.length; i++) {
        this.checkImageArray.push(''); // array full of checkbox image
    }
  }
  getUrlParams() {
    this._routerservice.fetchPath();
}
  toggleOptionList(index) {
                if (this.currentCheckBox === index) {
                    this.checkImageArray[this.currentCheckBox] = '';
                    this.currentCheckBox = -1;
                    this.showModal = false;
                    this.isWrongAnswer = false;

                } else {
                    if (this.currentCheckBox !== -1) {
                        this.checkImageArray[this.currentCheckBox] = '';
                    }
                    this.checkImageArray[index] = this.demoJSON.checkboxImage;
                    this.currentCheckBox = index;
                    if (this.answerId === index ) {
                      this.showModal = true;
                      this.isWrongAnswer = false;
                    } else {
                      this.showModal = false;
                      this.isWrongAnswer = true;
                    }
                }

            }
}
