// Repositories
import { UserRepository } from "../domain/user/repository/UserRepository";
import { UserRepositoryAxios } from "../data/remote/user/UserRepositoryAxios";
import { PostRepository } from "../domain/post/repository/PostRepository";
import { PostRepositoryAxios } from "../data/remote/post/PostRepositoryAxios";

// Use Cases
import { GetAllUsers } from "../domain/user/usecase/GetAllUsers";
import { GetUserDetails } from "../domain/user/usecase/GetUserDetails";
import { GetAllPostByUser } from "../domain/post/usecase/GetAllPostByUser";

export class Container {

  // Repositories
  private static userRepositoryInstance: UserRepository | null = null;
  private static postRepositoryInstance: PostRepository | null = null;

  static Repository = {
    getUserRepository(): UserRepository {
      if (!Container.userRepositoryInstance) {
        Container.userRepositoryInstance = new UserRepositoryAxios();
      }
      return Container.userRepositoryInstance;
    },
    getPostRepository(): PostRepository {
      if (!Container.postRepositoryInstance) {
        Container.postRepositoryInstance = new PostRepositoryAxios();
      }
      return Container.postRepositoryInstance;
    },
  };

  // Use Cases
  private static getAllUsersInstance: GetAllUsers | null = null;
  private static getUserDetailsInstance: GetUserDetails | null = null;
  private static getAllPostByUserInstance: GetAllPostByUser | null = null;

  static UseCase = {
    getAllUsers(): GetAllUsers {
      if (!Container.getAllUsersInstance) {
        Container.getAllUsersInstance = new GetAllUsers(
          Container.Repository.getUserRepository()
        );
      }
      return Container.getAllUsersInstance;
    },
    getUserDetails(): GetUserDetails {
      if (!Container.getUserDetailsInstance) {
        Container.getUserDetailsInstance = new GetUserDetails(
          Container.Repository.getUserRepository()
        );
      }
      return Container.getUserDetailsInstance;
    },
    getAllPostByUser(): GetAllPostByUser {
      if (!Container.getAllPostByUserInstance) {
        Container.getAllPostByUserInstance = new GetAllPostByUser(
          Container.Repository.getPostRepository()
        );
      }
      return Container.getAllPostByUserInstance;
    },
  };
}
