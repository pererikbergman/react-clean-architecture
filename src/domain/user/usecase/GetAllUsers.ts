import { UserRepository } from "../repository/UserRepository";
import { UserSummary } from "../model/UserSummary";

export class GetAllUsers {
  constructor(private repository: UserRepository) {}

  async execute(): Promise<UserSummary[]> {
    return await this.repository.getAll();
  }
}
