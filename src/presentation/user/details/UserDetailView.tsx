import React from "react";
import { useFetchUserDetails } from "./hooks/useFetchUserDetails";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    <Card style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data?.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Username: {data?.username}
        </Typography>
        <Typography variant="body2">
          Email: {data?.email}
        </Typography>
        <Typography variant="body2">
          Phone: {data?.phone}
        </Typography>
        <Typography variant="body2">
          Website: {data?.website}
        </Typography>
        <Typography variant="body2">
          Address: {`${data?.address.street}, ${data?.address.suite}, ${data?.address.city}, ${data?.address.zipcode}`}
        </Typography>
        <Typography variant="body2">
          Company: {data?.company.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetailView;
