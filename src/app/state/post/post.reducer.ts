import {
    createEntityAdapter,
    EntityAdapter,
    EntityState
} from '@ngrx/entity';
import { Post } from '../../models/post.model';
import { createReducer, on } from '@ngrx/store';
import { loadPostsFailure, loadPostsSuccess } from './post.actions';

export const postFeatureKey = 'post';

export interface PostState extends EntityState<Post> {
    // additional entities state properties
    currentPostId: number | null;
    error: any;
}

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostState = postAdapter.getInitialState({
    currentPostId: null,
    error: null
});

export const postReducer = createReducer(
    initialState,
    on(loadPostsSuccess, (state, { posts }) => {
        return postAdapter.setAll(posts, {...state,error:null});
    }),
    on(loadPostsFailure, (state, { error }) => {
        return { ...state, error};
    })

)