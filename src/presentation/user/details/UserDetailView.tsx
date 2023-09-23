// UserDetailView.tsx
import React from "react";
import { useFetchUserDetails } from "./hooks/useFetchUserDetails";

interface UserDetailViewProps {
  userId: number | undefined;
}

const UserDetailView: React.FC<UserDetailViewProps> = ({ userId }) => {
  if (!userId) return <p>Select a user to view details</p>;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, isError } = useFetchUserDetails(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div>
      <h2>{data?.name}</h2>
      <h2>{userId}</h2>
      {/* Add more user details here */}
    </div>
  );
};

export default UserDetailView;
