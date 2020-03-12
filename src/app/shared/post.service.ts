import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {

  constructor(private http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.databaseURL}/posts.json`, post)
      .pipe(map((resp: FbCreateResponse) => {
        return {
          ...post,
          id: resp.name,
          date: new Date(post.date)
        };
      }));
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.databaseURL}/posts.json`)
      .pipe(map((resp: { [key: string]: any }) => {
        return Object.keys(resp).map((key) => ({...resp[key], id: key, date: new Date(resp[key].date)}));
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.databaseURL}/posts/${id}.json`);
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.databaseURL}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        return {...post, id, date: new Date(post.date)};
      }));
  }

  update(post: Post): Observable<Post> {
    console.log(post);
    return this.http.patch<Post>(`${environment.databaseURL}/posts/${post.id}.json`, post);
  }
}

