import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowModalService } from '../services/show-modal/show-modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  showModal$ = this.showModalService.getShowModal();;

  constructor(private showModalService: ShowModalService) { }

  closeModal() {
    this.showModalService.setShowModal('')
  }
}
