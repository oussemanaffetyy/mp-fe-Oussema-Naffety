import { Categorie } from "./categorie";

export class Produit {
    id:number | undefined;
    code:string | undefined;
    designation: string | undefined;
    prix:number | undefined;
    categoryId:number| undefined;
    public categorie?:Categorie;
    }

