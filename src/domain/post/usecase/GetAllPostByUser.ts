import { PostRepository } from "../repository/PostRepository";
import { Post } from "../model/Post";

export class GetAllPostByUser {
  constructor(private repository: PostRepository) {}

  async execute(userId: number): Promise<Post[]> {
    return await this.repository.getByUserId(userId);
  }
}
