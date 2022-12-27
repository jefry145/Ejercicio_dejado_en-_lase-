import { Component , Input ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input("entrada") entrada = "default";
  
   constructor(){}
   
    numero:number= 0;
    Restar(){
      this.numero = this.numero-1;
          if(this.numero < 0){
             alert("No puede disminuir a numeros negativos")
             this.numero = this.numero+1;
            }
    }
    Suma(){
      this.numero = this.numero+1;
    }
}


// const sumarFlecha =(a:number,b:number):number => {
//   return a+b; 
// }

// const resultado= sumarFlecha(10,20);

