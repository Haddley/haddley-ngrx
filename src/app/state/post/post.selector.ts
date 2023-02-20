import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { postAdapter, PostState } from "./post.reducer";

export const selectPosts = (state: AppState) => state.posts;

export const { selectIds, selectEntities, selectAll, selectTotal } = postAdapter.getSelectors();

export const selectAllPosts = createSelector(selectPosts, selectAll);

export const selectEntitiesPosts = createSelector(selectPosts, selectEntities);

export const selectTotalPosts = createSelector(selectPosts, selectTotal);

export const selectIdsPosts = createSelector(selectPosts, selectIds);

export const selectError = createSelector(
    selectPosts,
    (state: PostState) => state.error
);