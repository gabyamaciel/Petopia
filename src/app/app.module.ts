// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetManagerComponent } from './components/petManager/pet-manager.component';
import { EditModalComponent } from './components/editModal/edit-modal.component';
import { LoadingComponent } from './components/loading/loading.component';
// Services
import { PetService } from './services/pet.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PetManagerComponent,
    EditModalComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [PetService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
