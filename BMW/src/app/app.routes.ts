import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProduitComponent } from './components/produit/produit';
import { AjouterComponent } from './components/ajouter/ajouter';
import { LoginComponent } from './guards/login/login';
import { InscriptionComponent } from './guards/inscription/inscription';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'produits', component: ProduitComponent },
    { path: 'ajouter', component: AjouterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent }
];
