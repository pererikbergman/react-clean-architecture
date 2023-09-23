import { UserRepository } from "../UserRepository";
import { User } from "../User";

export class GetAllUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.getAll();
  }
}
