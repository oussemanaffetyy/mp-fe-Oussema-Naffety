import { Component } from '@angular/core';
import { Produit } from '../model/protuit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produitCourant = new Produit();
  produits: Array<Produit> = [
    { id: 1, code: 'x12', designation: "Panier plastique", prix: 20 },
    { id: 2, code: 'y4', designation: "table en bois", prix: 100 },
    { id: 3, code: 'y10', designation: "salon en cuir", prix: 3000 }
  ];

  validerFormulaire(form: NgForm) {
    console.log(form.value);
  
    if (form.value.id !== undefined) {
      let id = form.value.id;
      let existingProduit = this.produits.find(produit => produit.id === id);
  
      if (existingProduit) {
        let reponse: boolean = confirm("ID déjà existant. Voulez-vous mettre à jour le produit existant ?");  
      } else {
        console.log("ID non vide...");
        this.produits.push(form.value);
        form.resetForm();
      }
    } else {
      console.log("ID vide...");
    }
  }
  
  supprimerProduit(p: Produit) {
    let reponse: boolean = confirm("Voulez vous supprimer le produit :" + p.designation + " ?");
    if (reponse == true) {
      console.log("Suppression confirmée...");
      let index: number = this.produits.indexOf(p);
      console.log("indice du produit à supprimer: " + index);
      if (index !== -1) {
     
        this.produits.splice(index, 1);
      }
    }
    else {
      console.log("Suppression annulée...");
    }
  }
  effacer() {

      this.produitCourant = new Produit();
    
    
  }
  editerProduit(produit: Produit) {
    // Set the values of produitCourant with the selected product's attributes
    this.produitCourant = {
      id: produit.id,
      code: produit.code,
      designation: produit.designation,
      prix: produit.prix
    };
  }
}
