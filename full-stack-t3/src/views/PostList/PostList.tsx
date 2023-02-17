import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";
import type { Posts } from "@prisma/client";
import type { FC } from "react";
import React from "react";
import type { api } from "../../utils/api";
import { PostListDisplay } from "./PostListDisplay";

export interface PostListProps {
  posts: ReturnType<typeof api.posts.getAll.useQuery>;
}

export const PostList: FC<PostListProps> = (props) => {
  if (props.posts.isLoading) {
    return <Spinner />;
  } else if (props.posts.isError) {
    return (
      <Alert status="error">
        <AlertIcon /> There was an error fetching posts. Please try again later
      </Alert>
    );
  }

  return <PostListDisplay posts={props.posts.data as Posts[]} />;
};
