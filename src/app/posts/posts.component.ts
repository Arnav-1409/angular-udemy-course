import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found-error';
import { BadInput } from '../common/validators/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;


  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { input: input.value };
    input.value = '';
    this.service.createPosts(post).subscribe(response => {
      console.log(response, post);
      post = response;
      console.log(post, post.id.id);
      this.posts.splice(0, 0, post);
    },
      (error: AppError) => {
        if (error instanceof BadInput)
          alert('This post has already een deleted');
        else {
          alert('An unexpecter error occured.');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    this.service.updatePosts(post).subscribe(response => {
      console.log(response);
    });
  }

  deletePost(id) {
    this.service.deletePosts(345).subscribe(response => {
      let index = this.posts.indexOf(id);
      this.posts.splice(index, 1);
    },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already een deleted');
        else {
          alert('An unexpecter error occured.');
          console.log(error);
        }
      });
  }

}
