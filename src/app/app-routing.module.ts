import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetManagerComponent } from './components/petManager/pet-manager.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pet-manager', component: PetManagerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
