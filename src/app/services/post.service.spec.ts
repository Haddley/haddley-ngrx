import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Post } from '../models/post.model';
import { PostService } from './post.service';
import { TestBed } from '@angular/core/testing';

describe('PostService', () => {
  let service: PostService;
  let httpSpy: Spy<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });

    service = TestBed.inject(PostService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should create a new post', (done: DoneFn) => {

    const newPost = { id: 100, title: "json-server100", author: "typicode", body: "some body100" } as Post;

    httpSpy.post.and.nextWith(newPost);

    service.addPost(newPost).subscribe(post => {
      expect(post).toEqual(newPost);
      done();
    });
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should return an existing post', (done: DoneFn) => {

    const existingPost = { id: 1, title: "json-server", author: "typicode", body: "some body" } as Post;
    const postId = existingPost.id;

    httpSpy.get.and.nextWith(existingPost);

    service.getPost(postId).subscribe(post => {
      expect(post).toEqual(existingPost);
      done();
    });

    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should return a 404 if post does not exist', (done: DoneFn) => {

    const postId = 89776683;

    httpSpy.get.and.throwWith(new HttpErrorResponse({
      error: "404 - Not Found",
      status: 404
    }));

    service.getPost(postId).subscribe({
      next: (post) => {
        done.fail("Expected a 404");
      },
      error: (error) => {
        expect(error.status).toEqual(404);
        done();
      }
    });

    expect(httpSpy.get.calls.count()).toBe(1);
  });


});
