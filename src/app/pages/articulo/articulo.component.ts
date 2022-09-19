import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  maestroslist:any[]=[];
  listaMaestrosChecados :String[] = [];
  listaMaestrosOficial:any[] = [];
  currentSelected : {};
  showDropDownMaestros=false;
  maestrosTitulos:String ="Seleccione docentes"

  visualizar;

  constructor(private route:ActivatedRoute) {
    this.maestroslist = [
      {name :'Juan Gutierrez',checked : false,participacion:'',facultad:''},
      {name :'Jonathan Dosantos',checked : false,participacion:'',facultad:''},
      {name :'Pedro Enrique',checked : false,participacion:'',facultad:''},
      {name :'Frances1 Tiafoe',checked : false,participacion:'',facultad:''},
      {name :'Frances2 Tiafoe1',checked : false,participacion:'',facultad:''},
      {name :'Pedro3 Enrique1',checked : false,participacion:'',facultad:''},
      {name :'Frances4 Tiafoe2',checked : false,participacion:'',facultad:''},
      {name :'Frances5 Tiafoe3',checked : false,participacion:'',facultad:''},
    ]

    if(this.route.snapshot.params['id']){
      this.visualizar = this.route.snapshot.params['id'];
      this.listaMaestrosOficial = [
        {name :'Juan Gutierrez',checked : false,participacion:'',facultad:''},
        {name :'Jonathan Dosantos',checked : false,participacion:'',facultad:''},
        {name :'Pedro Enrique',checked : false,participacion:'',facultad:''},
      ]
      this.listaMaestrosOficial.forEach((x) => {
        if(this.maestroslist.find((y) => y.name == x.name)){
          this.listaMaestrosChecados.push(x.name);
        }
      });

      this.maestroslist.forEach((x) => {
        if(this.listaMaestrosChecados.includes(x.name)){
          x.checked = true;
        }
      })
    }else{
      this.listaMaestrosChecados = [];

    }

  
   

   }
  

obtenerMaestrosSeleccionados(status:Boolean,value:String){

 let maestroOficial = this.maestroslist.filter(x => x.name == value)[0];
 if(status){
   this.listaMaestrosChecados.push(value);  
   this.listaMaestrosOficial.push(maestroOficial);
 }else{
     var index = this.listaMaestrosChecados.indexOf(value);
     var indexMaestroOficial = this.listaMaestrosOficial.indexOf(maestroOficial);
     this.listaMaestrosChecados.splice(index,1);
     this.listaMaestrosOficial.splice(indexMaestroOficial,1);
     
 }
 
 this.currentSelected = {checked : status,name:value};

 console.log(this.listaMaestrosOficial);
 console.log(this.listaMaestrosChecados);

}

}
