import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { AppError } from './../common/validators/app-error';
import { NotFoundError } from './../common/validators/not-found-error';
import { Observable } from 'rxjs/Observable';
import { BadInput } from '../common/validators/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400)
          return Observable.throw(new BadInput(error));
        
        return Observable.throw(new AppError(error));
      });
  }

  updatePosts(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePosts(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status === 404) 
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(error));
      });
  }
}
