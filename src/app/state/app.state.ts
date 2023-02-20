import { DiceState } from "./dice/dice.state";
import { PostState } from "./post/post.reducer";

export interface AppState { 
    dice: DiceState;
    posts: PostState;
}
