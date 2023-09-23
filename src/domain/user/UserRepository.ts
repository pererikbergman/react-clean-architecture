import { User } from "./User";
import { UserDetails } from "./UserDetails";

export interface UserRepository {
  getAll(): Promise<User[]>;
  getById(id: number): Promise<UserDetails>;
}
