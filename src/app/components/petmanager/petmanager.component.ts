import { Component } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'petmanager-component',
  templateUrl: './petmanager.component.html',
  styleUrls: ['./petmanager.component.scss'],
})
export class PetManagerComponent {
  pets: Pet[] = [];

  constructor(private petService: PetService) {}

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
