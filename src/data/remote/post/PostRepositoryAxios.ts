import { PostRepository } from "../../../domain/post/repository/PostRepository";
import { PostDto } from "./PostDto";
import { Post } from "../../../domain/post/model/Post";

import axiosInstance from "../../dataSource/axiosInstance";

export class PostRepositoryAxios implements PostRepository {
  async getByUserId(id: number): Promise<Post[]> {
    const response = await axiosInstance.get(`/posts?userId=${id}`);
    return response.data.map((postDto: PostDto) => convertToPost(postDto));
  }
}

function convertToPost(postDto: PostDto): Post {
  return new Post(postDto.userId, postDto.id, postDto.title, postDto.body);
}
