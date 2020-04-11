import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MainComponent } from './main/main.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { ListeFamilleComponent } from './components/liste-famille/liste-famille.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '',  component: MainComponent, children: [ 
    { path: 'accueil', component: AccueilComponent },
    { path: 'listeFamilles', component: ListeFamilleComponent},
	{ path: '**', component: ErreurComponent }
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
