import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { NotificationService } from '../../services/notification.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'pet-manager-component',
  templateUrl: './pet-manager.component.html',
  styleUrls: ['./pet-manager.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class PetManagerComponent {
  pets: Pet[] = [];
  isModalOpen = false;

  selectedPet!: Pet;

  constructor(
    private petService: PetService,
    private notificationService: NotificationService
  ) {}

  openModal(pet: Pet) {
    this.selectedPet = { ...pet };
    this.isModalOpen = true;
  }

  onClickSave() {
    this.petService.updatePet(this.selectedPet.id, this.selectedPet).subscribe({
      next: (response) => {
        console.log(response);
        this.notificationService.showSuccess('Pet data updated successfully');
        this.isModalOpen = false;
      },
      error: (error) => {
        this.notificationService.showError(`Error updating pet data: ${error}`);
      },
    });
  }

  onModalClose() {
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.fetchPets();
  }

  fetchPets() {
    this.petService.getPet().subscribe({
      next: (pets) => {
        this.pets = pets;
      },
      error: (error) => {
        this.notificationService.showError(`Error fetching pets: ${error}`);
      },
    });
  }
}
