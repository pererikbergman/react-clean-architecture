import React from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { User } from "../../../domain/user/User";

interface UserListViewProps {
  onUserClick: (user: User) => void;
}

const UserListView: React.FC<UserListViewProps> = ({ onUserClick }) => {
  const { data, isLoading, isError } = useFetchUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      {data?.map((user) => (
        <div key={user.id} onClick={() => onUserClick(user)}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserListView;
