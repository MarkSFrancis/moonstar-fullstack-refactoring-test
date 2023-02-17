import { Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";

export const NoPostsDisplay: FC = () => {
  return (
    <>
      <Heading>No posts found</Heading>
      <Text>
        Looks like there aren&apos;t any publicly shared posts yet. Get stuck in
        with your first post above
      </Text>
    </>
  );
};
