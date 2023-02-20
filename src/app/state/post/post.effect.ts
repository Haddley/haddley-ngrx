import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loadPosts, loadPostsFailure, loadPostsSuccess } from "./post.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "src/app/services/post.service";

@Injectable()
export class PostEffects {

    constructor(private actions$: Actions, private postService: PostService) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPosts),
            exhaustMap(() =>
                // call the service
                this.postService.getPosts().pipe(
                    // return a Success action when the HTTP request was successfull
                    map((posts) => loadPostsSuccess({ posts: posts })),
                    // return a Failed action when something went wrong during the HTTP request
                    catchError((error) => of(loadPostsFailure({ error: 'http error' }))),
                ),
            ),
        )
    );
}