import { useQuery } from "react-query";

import { Container } from "../../../../di/Container";

export const useFetchUsers = () => {
  const useCase = Container.UseCase.getAllUsers();

  const { data, isLoading, isError } = useQuery("users", () =>
    useCase.execute()
  );

  return { data, isLoading, isError };
};
