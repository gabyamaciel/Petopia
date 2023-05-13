import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetManagerComponent } from './components/petmanager/petmanager.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'petmanager', component: PetManagerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
