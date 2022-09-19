import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultaspublicas',
  templateUrl: './consultaspublicas.component.html',
  styleUrls: ['./consultaspublicas.component.css']
})
export class ConsultaspublicasComponent implements OnInit {
  misProducciones: any[] = [];
  listTipo: any[];
  listMaestro: any[];

  maestroslist: any[];
  libro: String = "Seleccione un libro";

  showDropDown = false;
  maestroFiltro: String = "Filtro por docente"
  tipoFiltro: String = "Filtro por tipo"
  maestrosTitulo: String = "Filtro por docente"

  showDropDownTipo = false;
  visualizar;
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;


  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getPrev(calendar.getToday(), 'd', 30);
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 30);
    this.misProducciones = [
      {
        tipo: 'Articulo',
        titulo: 'Articulo 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Articulo',
        titulo: 'Articulo 2',
        validacion: 'Aceptada',
        publicacion: 'Publicar'
      },
      {
        tipo: 'Libro',
        titulo: 'Libro 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Articulo',
        titulo: 'Articulo 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Articulo',
        titulo: 'Articulo 2',
        validacion: 'Aceptada',
        publicacion: 'Publicar'
      },
      {
        tipo: 'Libro',
        titulo: 'Libro 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Ponencia',
        titulo: 'Ponencia 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'CapituloLibro',
        titulo: 'Capitulo Libro 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
    ]

    this.listTipo = [
      { name: 'Articulo', checked: false },
      { name: 'Ponencia', checked: false },
      { name: 'Libro', checked: false },
      { name: 'Capitulo del libro', checked: false }
    ]

    this.listMaestro = [
      { name: 'Articulo', checked: false },
      { name: 'Ponencia', checked: false },
      { name: 'Libro', checked: false },
      { name: 'Capitulo del libro', checked: false }
    ]



  }

  ngOnInit(): void {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
      date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
      this.isHovered(date);
  }
  getSelectedValue(value: String) {
    console.log(value);
    this.libro = value;

    this.showDropDown = false;
  }

  getSelectedValueTipo(value: String) {
    console.log(value);
    this.libro = value;

    this.showDropDownTipo = false;
  }
  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }


}
