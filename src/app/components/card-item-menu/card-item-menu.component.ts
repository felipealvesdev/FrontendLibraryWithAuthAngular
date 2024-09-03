import { HttpClient } from '@angular/common/http';
import { Component, Input, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.reducer';
import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
    private store: Store<AuthState>,
    private router: Router
  ) {}


  onClickGoesTo(): void {
    this.router.navigate([`/home/books/${this.id}`]);
  }
}
