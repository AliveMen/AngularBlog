import {Component, OnInit} from '@angular/core';
import {PostService} from '../shared/post.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  posts$: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }
}
