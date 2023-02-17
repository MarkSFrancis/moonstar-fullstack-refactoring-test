import { Alert, AlertIcon, Box, Spinner } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import React from "react";
import { api } from "../../utils/api";
import type { Posts } from "@prisma/client";

export interface PostGuardProps {
  id: string;
  children: (post: Posts) => ReactNode;
}

export const PostGuard: FC<PostGuardProps> = (props) => {
  const post = api.posts.getById.useQuery(props.id);

  return (
    <Box as="main">
      {post.isLoading && <Spinner />}
      {post.isError && (
        <Alert status="error">
          <AlertIcon /> There was an error fetching your post. Please try again
          later
        </Alert>
      )}
      {post.isSuccess && !post.data && (
        <Alert status="error">
          <AlertIcon />
          404: Post not found. It may have been deleted.
        </Alert>
      )}
      {post.data && props.children(post.data)}
    </Box>
  );
};
