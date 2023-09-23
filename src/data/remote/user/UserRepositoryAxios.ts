import { User } from "../../../domain/user/User";
import { UserDetails } from "../../../domain/user/UserDetails";
import { UserRepository } from "../../../domain/user/UserRepository";
import { UserDto } from "./UserDto";
import axiosInstance from "../../dataSource/axiosInstance";

export class UserRepositoryAxios implements UserRepository {
  async getAll(): Promise<User[]> {
    const response = await axiosInstance.get(`/users`);
    return response.data.map((userDto: UserDto) => convertToUser(userDto));
  }

  async getById(id: number): Promise<UserDetails> {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data as UserDetails;
  }
}

function convertToUser(userDto: UserDto): User {
  return new User(userDto.id, userDto.name);
}
