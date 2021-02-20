import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: {
    _id: '',
    cover: '',
    name: ''
    unitValue: 0,
    description: ''
  };
  id : string = ''; 
  public href: string = "";
  quantity = '';

  constructor(private booksService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;  
    this.booksService.getElementById(this.id)
    .subscribe(
      (book: any) => {
        this.book = book
      },
      (error) => {
        console.error('Error getting book: ', error)
      }
    )
  }

 }