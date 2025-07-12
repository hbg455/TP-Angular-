import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produits } from '../interfaces/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitapiService {
  private apiUrl = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produits[]> {
    return this.http.get<Produits[]>(this.apiUrl);
  }

  getProduitById(id: number): Observable<Produits> {
    return this.http.get<Produits>(`${this.apiUrl}/${id}`);
  }

  ajouterProduit(produit: Produits): Observable<Produits> {
    return this.http.post<Produits>(this.apiUrl, produit);
  }

  getProduitsByGamme(gamme: string): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${this.apiUrl}?gamme=${gamme}`);
  }
}
