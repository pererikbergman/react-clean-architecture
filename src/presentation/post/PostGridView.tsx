import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useFetchPostByUser } from "./hooks/useFetchPostByUser";

interface PostGridViewProps {
  userId: number | undefined;
}

const PostGridView: React.FC<PostGridViewProps> = ({ userId }) => {
  if (!userId) return <p>Select a user to view details</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, isError } = useFetchPostByUser(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div>
      <Grid container spacing={3} style={{ margin: "0px" }}>
        {data?.map((post) => (
          <Grid item xs={4} key={post.id}>
            <Paper
              elevation={3}
              style={{ padding: "16px", minHeight: "200px" }}
            >
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                User ID: {post.userId}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Post ID: {post.id}
              </Typography>
              <Typography variant="body1">{post.body}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostGridView;
