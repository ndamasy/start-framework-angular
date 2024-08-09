import { Component, EventEmitter, Input,Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

import {  Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HomeComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
 imageSrc: string = '';
  isClicked: boolean = false;
  open(src:any) {
    this.isClicked = true;
    this.imageSrc="../../assets/"+src
  }
  close() {
    this.isClicked = false;
  }

  sayHellow() {
  console.log('hi')
}

  constructor(private _renderer: Renderer2) {
    this._renderer.addClass(document.body, 'position-relative');

  }

  




}



  // toggleSlider($event: any) {
  //   if ($event.target != null) {
  //     this.imageSrc = $event.target.previousElementSibling.getAttribute('src');
  //     console.log(this.imageSrc);
  //   }
  // }
 
  // @Output() itemEvent: EventEmitter<string> = new EventEmitter();
  //   onFireEvent():void {
  //       this.itemEvent.emit('hi')
  //   }