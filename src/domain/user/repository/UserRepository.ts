import { UserSummary } from "../model/UserSummary";
import { UserDetails } from "../model/UserDetails";

export interface UserRepository {
  getAll(): Promise<UserSummary[]>;
  getById(id: number): Promise<UserDetails>;
}
