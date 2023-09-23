import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import UserListView from "./presentation/user/list/UserListView";
import UserDetailView from "./presentation/user/details/UserDetailView";
import PostGridView from "./presentation/post/PostGridView";

import { UserSummary } from "./domain/user/model/UserSummary";

const queryClient = new QueryClient();

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [selectedUser, setSelectedUser] = useState<UserSummary | null>(null);

  useEffect(() => {
    if (selectedUser) {
      console.log("Selected User: ", selectedUser);
    }
  }, [selectedUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 240px" }}>
          {" "}
          <UserListView onUserClick={setSelectedUser} />
        </div>
        <div style={{ flex: 1 }}>
          <UserDetailView userId={selectedUser?.id} />
          <PostGridView userId={selectedUser?.id} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
