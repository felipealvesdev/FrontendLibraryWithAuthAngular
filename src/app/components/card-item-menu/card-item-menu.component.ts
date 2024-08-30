import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-item-menu',
  standalone: true,
  imports: [],
  templateUrl: './card-item-menu.component.html',
  styleUrl: './card-item-menu.component.scss'
})
export class CardItemMenuComponent {

  @Input({required: true}) title = "";
  @Input({required: true}) id = "";
}
