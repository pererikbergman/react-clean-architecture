import { UserRepository } from "../domain/user/UserRepository";
import { UserRepositoryAxios } from "../data/remote/user/UserRepositoryAxios";

import { GetAllUsers } from "../domain/user/usecase/GetAllUsers";
import { GetUserDetails } from "../domain/user/usecase/GetUserDetails";

export class Container {
  // Repositories
  private static userRepositoryInstance: UserRepository | null = null;

  static Repository = {
    getUserRepository(): UserRepository {
      if (!Container.userRepositoryInstance) {
        Container.userRepositoryInstance = new UserRepositoryAxios();
      }
      return Container.userRepositoryInstance;
    },
  };

  // Use Cases
  private static getAllUsersInstance: GetAllUsers | null = null;
  private static getUserDetailsInstance: GetUserDetails | null = null;

  static UseCase = {
    getAllUsers(): GetAllUsers {
      if (!Container.getAllUsersInstance) {
        Container.getAllUsersInstance = new GetAllUsers(Container.Repository.getUserRepository());
      }
      return Container.getAllUsersInstance;
    },
    getUserDetails(): GetUserDetails {
      if (!Container.getUserDetailsInstance) {
        Container.getUserDetailsInstance = new GetUserDetails(Container.Repository.getUserRepository());
      }
      return Container.getUserDetailsInstance;
    },
  };
}
