import { useQuery } from "react-query";

import { Container } from "../../../../di/Container";

export const useFetchUserDetails = (userId: number) => {
  const useCase = Container.UseCase.getUserDetails();

  const { data, isLoading, isError } = useQuery(`user/${userId}`, () =>
    useCase.execute(userId)
  );

  return { data, isLoading, isError };
};
