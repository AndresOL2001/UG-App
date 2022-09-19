import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-capitulolibro',
  templateUrl: './capitulolibro.component.html',
  styleUrls: ['./capitulolibro.component.css']
})
export class CapitulolibroComponent {
  list:any[]; 
  maestroslist:any[]; 
  libro:String ="Seleccione un libro";

  listaMaestrosChecados :String[] = [];
  listaMaestrosOficial:any[] = [];
  currentSelected : {};
  showDropDown=false;
  maestrosTitulos:String ="Seleccione docentes"

  showDropDownMaestros=false;
  visualizar;
  constructor(private route:ActivatedRoute) {
    this.listaMaestrosChecados = [];
    this.list = [
      {name :'India',checked : false},
      {name :'US',checked : false},
      {name :'China',checked : false},
      {name :'France',checked : false}
    ]

    this.maestroslist = [
      {name :'Juan Gutierrez',checked : false,participacion:'',facultad:''},
      {name :'Jonathan Dosantos',checked : false,participacion:'',facultad:''},
      {name :'Pedro Enrique',checked : false,participacion:'',facultad:''},
      {name :'Frances Tiafoe',checked : false,participacion:'',facultad:''}
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

       getSelectedValue(value:String){
         console.log(value);
        this.libro=value;        
        
        this.showDropDown = false;
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
