import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProduitsService } from '../services/produits.service';
import { Produit } from '../model/protuit';
import { Categorie } from '../model/categorie';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  constructor(private produitsService: ProduitsService) {
  }

  produitCourant = new Produit();
  categories!: Categorie[];
 
  //updatedCatId!: number;

  produits: Array<Produit> = [];
  //categories: Array<Categorie> = new Array<Categorie>;




  formulaireVisible = false;


  ngOnInit(): void {
    //Message affiché au moment de l'affichage du composant
    console.log("Initialisation du composant:.....");
    //charger les données
    this.consulterProduits();
    this.consultercategories()
 
  }
  consulterProduits() {
    console.log("Récupérer la liste des produits");
    //Appeler la méthode 'getProduits' du service pour récupérer les données du JSON
    this.produitsService.getProduits()
      .subscribe(
        {
          //En cas de succès
          next: data => {
            console.log("Succès GET");
            this.produits = data;
          },
          //En cas d'erreur
          error: err => {
            console.log("Erreur GET");
          }
        }
      )
  }
  consultercategories() {
    console.log("Récupérer la liste des categories");
    //Appeler la méthode 'getProduits' du service pour récupérer les données du JSON
    this.produitsService.getCategories()
      .subscribe(
        {
          //En cas de succès
          next: data => {
            console.log("Succès GET");
            this.categories = data;
          },
          //En cas d'erreur
          error: err => {
            console.log("Erreur GET");
          }
        }
      )
  }

  /*Update produit*/
  mettreAJourProduit() {
  
      this.produitsService.updateProduit(this.produitCourant.id, this.produitCourant)
        .subscribe(
          {
            next: () => {
              console.log("Produit mis à jour avec succès.");
              // Refresh the list of products after update
              this.consulterProduits();
            },
            error: err => {
              console.log("Erreur lors de la mise à jour du produit.");
            }
          }
        );
    
  }

  supprimerProduit(id: number | undefined) {
    if (id) {
      this.produitsService.deleteProduit(id)
        .subscribe(
          {
            next: () => {
              console.log("Produit supprimé avec succès.");
              // Refresh the list of products after deletion
              this.consulterProduits();
            },
            error: err => {
              console.log("Erreur lors de la suppression du produit.");
            }
          }
        );
    }
  }





  validerFormulaire(form: NgForm) {
    console.log(form.value);
    let existingProduit = this.produits.find(produit => produit.id === form.value.id);

    if (existingProduit) {
      // Mettre à jour le produit existant
      this.mettreAJourProduit();
      this.formulaireVisible = false;
    } else {
      // Ajouter un nouveau produit
      form.resetForm();
    }

  }
  annuler() {
    this.formulaireVisible = false;
  }

  editerProduit(produit: Produit | undefined) {
    // Set the current product and show the form
    if (produit) {
      // Set the current product and show the form
      this.produitCourant = produit;
     
      this.formulaireVisible = true;
    }
  }
}

