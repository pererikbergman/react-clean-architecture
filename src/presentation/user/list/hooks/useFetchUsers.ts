import { useQuery } from "react-query";
import { Container } from "../../../../di/Container";

export const useFetchUsers = () => {
  // Initialize UserRepository and GetAllUsers use case
  const getAllUsersUseCase = Container.UseCase.getAllUsers();

  // Use React Query to fetch data
  const { data, isLoading, isError } = useQuery("users", () =>
    getAllUsersUseCase.execute()
  );

  return { data, isLoading, isError };
};
