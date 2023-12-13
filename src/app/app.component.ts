import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions:Array<any> =
  [
    {titre:"Accueil",route: "/accueil",icon:"house"},
    {titre:"Produits",route: "/produits",icon:"cart-check-fill"},
    {titre:"Ajouter Produit",route: "/ajouter-Produit",icon:"bag-plus-fill"},
  ]

  actionCourante:any;

  setActionCourante(a :any)
  {
    this.actionCourante=a;
  }
}
