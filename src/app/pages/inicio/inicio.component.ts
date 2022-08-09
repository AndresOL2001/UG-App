import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector(".banner__close").addEventListener("click", function () {
      this.closest(".banner").style.display = "none";
    });
    
  }

}
