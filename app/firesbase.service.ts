// https://angularfirebase.com/lessons/reactive-crud-app-with-angular-and-firebase-tutorial/#Declaring-Variables-and-Helper-Functions


import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class PostService {

  private basePath: string = '/posts';

  posts:AngularFireList<any> = null; //  list of objects
  post: any = null; //   single object

  constructor(private db: AngularFireDatabase) { }
  
  getPostsList(): any {
    this.posts = this.db.list(this.basePath);
    return this.posts;
  }

  getPost(key: string): any {
    const postPath =  `${this.basePath}/${key}`;
    this.post = this.db.object(postPath)
    return this.post
  }

  createPost(post: any): void  {
   this.posts.push(post)
     .catch(error => this.handleError(error))
 }


 // Update an existing post
 updatePost(key: string, value: any): void {
   this.posts.update(key, value)
     .catch(error => this.handleError(error))
 }

 // Deletes a single post
 deletePost(key: string): void {
     this.posts.remove(key)
       .catch(error => this.handleError(error))
 }

 // Deletes the entire list of posts
 deleteAll(): void {
     this.posts.remove()
       .catch(error => this.handleError(error))
 }

 // Default error handling for all actions
 private handleError(error) {
   console.log(error)
 }

}