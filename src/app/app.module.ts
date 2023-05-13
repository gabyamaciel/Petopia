// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetManagerComponent } from './components/petManager/pet-manager.component';
import { EditModalComponent } from './components/editModal/edit-modal.component';
// Services
import { PetService } from './services/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PetManagerComponent,
    EditModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
