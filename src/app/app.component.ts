import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions:Array<any> =
  [
    {titre:"Accueil",route: "/accueil"},
    {titre:"Produits",route: "/produits"},
    {titre:"Ajouter Produit",route: "/ajouter-Produit"},
  ]

  actionCourante:any;

  setActionCourante(a :any)
  {
    this.actionCourante=a;
  }
}
