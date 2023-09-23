import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
      <List>
        {data?.map((user) => (
          <ListItem key={user.id} button onClick={() => onUserClick(user)}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserListView;
