import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardItemMenuComponent } from "../../components/card-item-menu/card-item-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardItemMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
