import { UserRepository } from "../UserRepository";
import { UserDetails } from "../UserDetails";

export class GetUserDetails {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: number): Promise<UserDetails> {
    return await this.userRepository.getById(userId);
  }
}
