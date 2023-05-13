import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'pet-manager-component',
  templateUrl: './pet-manager.component.html',
  styleUrls: ['./pet-manager.component.scss'],
})
export class PetManagerComponent {
  pets: Pet[] = [];
  isModalOpen = false;
  
  selectedPet!: Pet;

  constructor(private petService: PetService) {}
  
  openModal(pet: Pet) {
    this.selectedPet = {...pet};
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.fetchPets();
  }

  fetchPets() {
    this.petService.getPet().subscribe(
      (pets) => {
        this.pets = pets;
      },
      (error) => {
        console.log('Error fetching pets:', error);
      }
    );
  }
}
