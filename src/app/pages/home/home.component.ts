import { LibraryDataService } from '../../services/library-data/library-data.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardItemMenuComponent } from "../../components/card-item-menu/card-item-menu.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardItemMenuComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  books:any[] = [];
  error: string | null = null;

  constructor(
    private LibraryDataService: LibraryDataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadBooks();
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
