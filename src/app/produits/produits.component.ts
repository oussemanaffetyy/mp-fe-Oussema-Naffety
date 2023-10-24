import { Component } from '@angular/core';
import { Produit } from '../model/protuit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits: Array<Produit> = [
    {id:1,code:'x12',designation:"Panier plastique",prix:20},
    {id:2,code:'y4',designation:"table en bois",prix:100},
    {id:3,code:'y10',designation:"salon en cuir",prix:3000}
    ]; 
  
    SupprimerProduit(index: number) {
      if (index >= 0 && index < this.produits.length) {
        this.produits.splice(index, 1);
      }
    }
}
