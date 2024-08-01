import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [],
  templateUrl: './input-login.component.html',
  styleUrl: './input-login.component.scss'
})
export class InputLoginComponent {
  @Input() placeHolder:string = "";
}
