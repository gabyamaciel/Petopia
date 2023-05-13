import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private apiUrl =
    'https://my-json-server.typicode.com/gabyamaciel/pet-store-api/pets';

  constructor(private http: HttpClient) {}

  // Fetches all pets from the API
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  // Creates a new pet in the API
  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  // Deletes a pet with the specified ID from the API
  deletePet(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Updates a pet with the specified ID in the API
  updatePet(id: number, pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Pet>(url, pet);
  }
}