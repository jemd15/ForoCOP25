import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  carouselActions = new EventEmitter<string | MaterializeAction>();
  modalActions = new EventEmitter<string | MaterializeAction>();
  id
  img: string
  news = [
    {
      title: 'Organizaciones de la sociedad civil hacen observaciones y advierten falencias del proceso de consulta ciudadana del Anteproyecto de Ley Marco de Cambio Climático',
      fall: '',
      headerImg: 'https://gallery.mailchimp.com/52a45e4cb5f30f4bf2c6bdedb/images/ffb0dc1c-b03e-4711-883e-83bb7545e217.png',
      content: 'El pasado viernes 26 de julio, dirigentes y miembros de organizaciones ciudadanas del Foro Sociedad Civil COP 25 y la Asociación Chilena de Organismos No Gubernamentales - Acción A.G., en coordinación con distintas organizaciones territoriales y sociales, se convocaron a una jornada de discusión del Anteproyecto de Ley Marco de Cambio Climático en el contexto del proceso de consulta pública organizada por el Ministerio del Medio Ambiente, y cuyo plazo para la recepción de observaciones culminó este 31 de julio.<br><br>A la instancia asistieron más de 40 representantes de diversos sectores de la sociedad civil, quienes en conjunto revisaron el Anteproyecto y acordaron observaciones al proceso de consulta y generales al texto mismo, manifestadas en una declaración que describe los principales aspectos que se propone revisar y perfeccionar para lograr que dicha normativa marco responda a los desafíos que impone el cambio climático y las necesidades y realidades actuales del país, en línea con lo establecido en el Acuerdo de París y considerando la avanzada experiencia internacional en materia ambiental.<br><br>“Si bien valoramos la voluntad política de Gobierno, y compartimos la necesidad urgente de contar con una Ley Marco sobre cambio climático, percibimos en el Anteproyecto una perspectiva sectorialista, sin un enfoque de derechos humanos, y con una institucionalidad no integral y excesivamente centrada en el que hacer del Ministerio de Medio Ambiente, además de otras deficiencias e insuficiencias en su contenido”, señalan representantes del Foro de la Sociedad Civil.<br><br>En el encuentro que hemos sostenido como organizaciones ciudadanas preocupadas de esta materia, se han expresado fundadamente diversas observaciones que consideramos pertinente dar a conocer a efectos de promover un necesario debate público al respecto y que el gobierno quite toda urgencia a su tramitación, como amerita una materia de tanta trascendencia”, exigen.<br><br>Considerando que el país será sede de la Conferencia de las Partes sobre Cambio Climático – COP 25 y que éste es un acontecimiento esperado con creciente interés movilizador desde la ciudadanía nacional e internacional, es fundamental destacar que el proceso de consulta de la ley marco de Cambio Climático requiere ajustarse a los estándares internacionales en materia de participación a los que está obligado el Estado, incluida la consulta indígena, así como a los tiempos de participación de la sociedad civil para realmente poder entregar un mayor aporte al contenido de la misma, tiempos que por lo mismo debiesen ampliarse y considerar a otros actores”, agregan.<br><br>La declaración, que no fue ingresada al proceso de consulta que se cuestiona, tiene como objetivo expresar a la opinión pública nacional e internacional, a las autoridades nacionales y a los medios de comunicación, las preocupaciones, aportes y necesidades de la Sociedad Civil frente al proceso de consulta ciudadana convocado por el gobierno y la construcción de una Ley Marco de Cambio Climático democrática y ampliamente participativa.',
      date: '',
      imgs: [
        '../../../assets/imgs/news/IMG_0271.JPG',
        '../../../assets/imgs/news/IMG_0272.JPG',
        '../../../assets/imgs/news/IMG_0278.JPG',
        '../../../assets/imgs/news/IMG_0279.JPG',
        '../../../assets/imgs/news/IMG_0281.JPG',
        '../../../assets/imgs/news/IMG_0283.JPG',
      ]
    },
    {
      title: 'LANZAMIENTO DEL FORO PARALELO SOCIEDAD CIVIL COP 25',
      fall: '',
      headerImg: 'https://www.codeff.cl/wp-content/uploads/2019/07/dsc05269-min.jpg',
      content: 'Con la presencia de organizaciones de la sociedad civil, academia y Gobierno, se realizó el pasado miércoles 24 de julio el Primer Diálogo Interuniversitario sobre Cambio Climático, que donde además se realizó el lanzamiento del Foro Paralelo Sociedad Civil COP 25, instancia de la cual CODEFF es integrante.<br><br>La actividad comenzó con las palabras de Carlos Melo, Director Vinculación con el Medio de la Facultad de Ingeniería y Tecnología, Universidad San Sebastián y Alejandro Reyes, Presidente Foro Paralelo Sociedad Civil COP25 quienes le dieron la bienvenida a los asistentes.<br><br>Posteriormente se dio paso al primer panel “Desafíos rumbo a la COP25”, que fue moderado por Ximena Salinas, Presidenta de CODEFF,  y donde intervinieron donde intervinieron Paulina Acevedo, Coordinadora del Programa Ciudadanía e Interculturalidad, Observatorio Ciudadano y Directora de Acción A.G.; Jorge Cuello, Docente derecho ambiental de la Universidad de Buenos Aires y la Cátedra José Artigas para la Integración; Johanna Arriagada, Coordinadora del Proyecto NDC-SP & 4CN/3IBA de la Oficina de Cambio Climático del ministerio del Medio Ambiente y Maximiliano Ríos, Alcalde de Lo Prado.<br><br>El segundo panel, “Impactos y propuestas ante el cambio climático”, fue moderado por  Gustavo Navarro de la Universidad San Sebastián y contó con la participación de Valeria Carrasco de parte de las Mujeres de la Zona Sacrificio Puchuncaví-Quintero en Resistencia, Isis Riquelme con su Proyecto Plan B y representante Fridays For Future, José Miguel Arriaza, Director de Ingeniería en Energía y Sustentabilidad Ambiental y Sara Larraín, Directora Ejecutiva Chile Sustentable.<br><br>El Foro Paralelo de la Sociedad Civil COP 25 es una iniciativa autoconvocada e impulsada de manera amplia, democrática y transversal por diferentes sectores de la sociedad civil, en respuesta al llamamiento formulado por el Secretario General de la ONU para que todos los pueblos del mundo y sus gobiernos se organicen y coordinen esfuerzos para aumentar la ambición y urgencia en la acción por el clima.<br><br>Nace con el objetivo de lograr la implementación de una instancia permanente y de alto nivel para la participación de la sociedad civil en el contexto de la Convención Marco de Cambio Climático de las Naciones Unidas, como ocurre en otros espacios multilaterales de la ONU, desde donde poder contribuir a las soluciones y aportar de forma incidente a las decisiones que se adoptan.',
      date: '04-07-2019',
      imgs: [
        '../../../assets/imgs/news/Autoridades.JPG',
        '../../../assets/imgs/news/Johanna Orellana Ministerio del Medio ambiente.jpg',
        '../../../assets/imgs/news/Maximiliano Ríos Alcalde Lo Prado.JPG',
        '../../../assets/imgs/news/Panelistas primer bloque.JPG',
        '../../../assets/imgs/news/Paulina Acevedo Observatorio Ciudadano.JPG',
        '../../../assets/imgs/news/Presentación Alejandro Reyes, Foro sociedad civil cop25.JPG',
        '../../../assets/imgs/news/Ximena Salinas Presidenta CODEFF.JPG'
      ]
    },
    {
      title: '',
      fall: '',
      headerImg: '',
      content: '',
      date: '',
      imgs: [
        'http://lorempixel.com/400/200',
        'http://lorempixel.com/400/200',
        'http://lorempixel.com/400/200',
        'http://lorempixel.com/400/200',
        'http://lorempixel.com/400/200'
      ]
    }
  ]

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('newsId')
  }

  changeToNews(id) {
    this.id = id
  }

  openModal(img: string) {
    this.img = img
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

}
