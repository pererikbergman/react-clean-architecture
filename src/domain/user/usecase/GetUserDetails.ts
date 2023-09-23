import { UserRepository } from "../repository/UserRepository";
import { UserDetails } from "../model/UserDetails";

export class GetUserDetails {
  constructor(private repository: UserRepository) {}

  async execute(userId: number): Promise<UserDetails> {
    return await this.repository.getById(userId);
  }
}
