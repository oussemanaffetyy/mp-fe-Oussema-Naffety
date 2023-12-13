import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/protuit';
import { Categorie } from '../model/categorie';
import { ProduitsService } from '../services/produits.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})

export class AjoutProduitComponent implements OnInit {

  nouveauProduit: Produit = new Produit();
  produits: Array<Produit> = [];
  categories: Array<Categorie> = [];
  
  constructor(private produitsService: ProduitsService) {
    this.nouveauProduit = new Produit();
    this.nouveauProduit.categorie = new Categorie();

   }

  ngOnInit(): void {
    this.produitsService.getProduits().subscribe(
      data => {
        console.log("Succès GET");
        this.produits = data;  // Update the array with existing products
      },
      error => {
        console.error('Error retrieving existing products:', error);
      }
    );
    this.produitsService.getCategories().subscribe(
      data => {
        console.log("Succès GET");
        this.categories = data;  // Update the array with existing categories
      },
      error => {
        console.error('Error retrieving categories:', error);
      }
    );
  }



  ajouterProduit(nouveauProduit: Produit) {
    console.log('Adding product:', nouveauProduit);
    this.produitsService.addProduit(nouveauProduit).subscribe(
      data => {
        this.produits = data;
        
      },
      error => {
        console.error('Error adding product:', error);
      }
    );
  }
  validerFormulaire(form: NgForm) {
    if (form.valid) {
     
        this.ajouterProduit(this.nouveauProduit);
        form.resetForm();
      
    }
  }
}