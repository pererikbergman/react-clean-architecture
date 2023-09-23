import { useQuery } from "react-query";
import { Container } from "../../../di/Container";

export const useFetchPostByUser = (userId: number) => {
  
  const useCase = Container.UseCase.getAllPostByUser();

  const { data, isLoading, isError } = useQuery(`posts?userId=${userId}`, () =>
    useCase.execute(userId)
  );

  return { data, isLoading, isError };
};
