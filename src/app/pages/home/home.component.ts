import { map } from 'rxjs/operators';
import { selectToken } from './../../state/auth/auth.selectors';
import { LibraryDataService } from '../../services/library-data/library-data.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardItemMenuComponent } from "../../components/card-item-menu/card-item-menu.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.reducer';
import { CommonModule } from '@angular/common';
import { bookModel } from '../../models/library.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardItemMenuComponent, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  books:bookModel[] = [];
  error: string | null = null;

  constructor(
    private LibraryDataService: LibraryDataService,
    private http: HttpClient,
    private store: Store<AuthState>
  ) {}

  ngOnInit(): void {
    this.loadBooks();
    this.store.select(selectToken).subscribe(state => {
      console.log(`O valor do token é: ${state}`)
    })
  }

  loadBooks(): void {
    this.LibraryDataService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data
      },
      error: (err) => {
        this.error = 'Failed to load books';
        console.log(err);
      }
    });
  }

}
