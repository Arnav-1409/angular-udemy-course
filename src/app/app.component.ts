import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title : "Title",
  //   isFavorite: true
  // }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
  //   console.log("favorite changed:",eventArgs);
  // }

  // tweet = {
  //   body:'...',
  //   likesCount: 10,
  //   isLiked: true,
  // }

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
  ]

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
