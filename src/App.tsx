import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState, useEffect } from "react";
import UserListView from "./presentation/user/list/UserListView";
import UserDetailView from "./presentation/user/details/UserDetailView";

import { User } from "./domain/user/User";

const queryClient = new QueryClient();

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    if (selectedUser) {
      console.log("Selected User: ", selectedUser);
    }
  }, [selectedUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <UserListView onUserClick={setSelectedUser} />
        </div>
        <div style={{ flex: 1 }}>
          <UserDetailView userId={selectedUser?.id} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
