import { UserRepository } from "../../../domain/user/repository/UserRepository";
import { UserDto } from "./UserDto";
import { UserSummary } from "../../../domain/user/model/UserSummary";
import { UserDetails } from "../../../domain/user/model/UserDetails";

import axiosInstance from "../../dataSource/axiosInstance";

export class UserRepositoryAxios implements UserRepository {
  async getAll(): Promise<UserSummary[]> {
    const response = await axiosInstance.get(`/users`);
    return response.data.map((userDto: UserDto) => convertToUser(userDto));
  }

  async getById(id: number): Promise<UserDetails> {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data as UserDetails;
  }
}

function convertToUser(userDto: UserDto): UserSummary {
  return new UserSummary(userDto.id, userDto.name);
}
