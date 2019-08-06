import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
  modalActions = new EventEmitter<string | MaterializeAction>();
  public img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhYu6jZKpMDBsVmiXs0lIS5S5d0hrfIHnc9-qviKkT52-QiFV';

  constructor() { }

  ngOnInit() {
  }

  openModal(img: string) {
    this.img = img;
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }
}
