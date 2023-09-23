import { Post } from "../model/Post";

export interface PostRepository {
  getByUserId(id: number): Promise<Post[]>;
}
