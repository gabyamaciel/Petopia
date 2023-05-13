import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  @Input() selectedPet!: Pet;
  @Output() closeModal = new EventEmitter<void>();
  
  
}
