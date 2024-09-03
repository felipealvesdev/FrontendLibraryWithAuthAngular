import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardBooksDetailComponent } from "../../components/card-books-detail/card-books-detail.component";

@Component({
  selector: 'app-books-detail',
  standalone: true,
  imports: [CardBooksDetailComponent],
  templateUrl: './books-detail.component.html',
  styleUrl: './books-detail.component.scss'
})
export class BooksDetailComponent implements OnInit{
  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
  }
}
