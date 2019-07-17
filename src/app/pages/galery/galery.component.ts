import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  public img:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhYu6jZKpMDBsVmiXs0lIS5S5d0hrfIHnc9-qviKkT52-QiFV'

  constructor() { }

  ngOnInit() {
  }
  
  openModal(img:string) {
    this.img = img
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
