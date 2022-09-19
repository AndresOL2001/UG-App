import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-periodo',
  templateUrl: './cambiar-periodo.component.html',
  styleUrls: ['./cambiar-periodo.component.css']
})
export class CambiarPeriodoComponent {

  disabled=true;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar) {
    this.fromDate = JSON.parse(localStorage.getItem('fromPeriod'));
    this.toDate = JSON.parse(localStorage.getItem('toPeriod'));
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  actualizarPeriodo(){
    localStorage.setItem('toPeriod',JSON.stringify(this.toDate));
    localStorage.setItem('fromPeriod',JSON.stringify(this.fromDate));
    Swal.fire('Correcto','El periodo se ha actualizado correctamente','success');

  }
  
}
