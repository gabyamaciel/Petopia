import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  @Input() selectedPet!: Pet;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() save: EventEmitter<void> = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  saveData(): void {
    this.save.emit();
  }
}
