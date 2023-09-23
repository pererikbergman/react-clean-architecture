import { useQuery } from "react-query";
import { Container } from "../../../../di/Container";

export const useFetchUserDetails = (userId: number) => {
  const getUserDetails = Container.UseCase.getUserDetails();

  const { data, isLoading, isError } = useQuery(`user/${userId}`, () =>
    getUserDetails.execute(userId)
  );

  return { data, isLoading, isError };
};
