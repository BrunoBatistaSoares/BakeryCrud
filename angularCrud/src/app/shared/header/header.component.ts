import { Component } from '@angular/core';
import { CurrentCategoryService } from '../services/current-category/current-category.service';
import { ShowModalService } from '../services/show-modal/show-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private showModalService: ShowModalService) { }

  showModal(modal: string) {
    this.showModalService.setModal(modal);
  }

  reload() { window.location.reload(); }
}
