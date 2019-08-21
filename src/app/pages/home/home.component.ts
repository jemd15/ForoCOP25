import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselActions = new EventEmitter<string|MaterializeAction>();
  modalActions = new EventEmitter<string|MaterializeAction>();
  img;
  news = [
    {
      title: 'Organizaciones de la sociedad civil hacen observaciones y advierten falencias del proceso de...',
      fall: '',
      headerImg: 'https://gallery.mailchimp.com/52a45e4cb5f30f4bf2c6bdedb/images/ffb0dc1c-b03e-4711-883e-83bb7545e217.png',
      date: ''
    },
    {
      title: 'LANZAMIENTO DEL FORO PARALELO SOCIEDAD CIVIL COP 25',
      fall: '',
      headerImg: 'https://www.codeff.cl/wp-content/uploads/2019/07/dsc05269-min.jpg',
      date: '04-07-2019'
    },
    {
      title: '',
      fall: '',
      headerImg: '',
      date: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  openModal(img: string) {
    this.img = img;
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }


}
