import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../model/protuit';
import { Categorie } from '../model/categorie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  // Url du service web de gestion de produits
  // commune pour toutes les méthodes
  urlHoteProduit = "http://localhost:3333/produits/";
  urlHoteCategorie = "http://localhost:3333/Categories/";
  constructor(private http: HttpClient) { }
  getProduits(): Observable<Array<Produit>> {
    return this.http.get<Array<Produit>>(this.urlHoteProduit);
  }
  deleteProduit(idP: number | undefined) {
    return this.http.delete(this.urlHoteProduit + idP);
  }
  addProduit(nouveau: Produit) {
    return this.http.post<Array<Produit>>(this.urlHoteProduit, nouveau);
  }
  updateProduit(idP: number | undefined, nouveau: Produit) {
    return this.http.put(this.urlHoteProduit + idP, nouveau);
  }
  getCategories(): Observable<Array<Categorie>> {
    return this.http.get<Array<Categorie>>(this.urlHoteCategorie);
  }
  getProduitsByDesignation(designation: string): Observable<Array<Produit>> {
    const url = `${this.urlHoteProduit}?designation=${designation}`;
    return this.http.get<Array<Produit>>(url);
  }
}

