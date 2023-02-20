import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:3000/posts/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`http://localhost:3000/posts/${post.id}`, post);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
  }

  patchPost(post: Post): Observable<Post> {
    return this.http.patch<Post>(`http://localhost:3000/posts/${post.id}`, post);
  }
  
}
