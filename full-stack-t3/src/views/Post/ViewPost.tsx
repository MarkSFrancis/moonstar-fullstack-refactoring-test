import { Box, Text, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";
import type { Posts } from "@prisma/client";
import { Section } from "../../components/Section";
import Head from "next/head";

export interface ViewPostProps {
  post: Posts;
}

export const ViewPost: FC<ViewPostProps> = (props) => {
  return (
    <>
      {props.post.content && (
        <Head>
          <title>
            Post |{" "}
            {props.post.content.length > 25
              ? `${props.post.content.substring(0, 22)}...`
              : props.post.content}
          </title>
          <meta name="description" content={props.post.content} />
        </Head>
      )}
      <VStack>
        {props.post.imageUrl && (
          // Note: because image size isn't controlled, this will cause a cumulative layout shift when the image loads.
          // This affects slower connections more
          <Box
            as="img"
            borderRadius="md"
            boxShadow="lg"
            width={992}
            src={props.post.imageUrl}
            alt="Post image"
          />
        )}
        {props.post.content && (
          <Section alignSelf="stretch">
            <Text>{props.post.content}</Text>
          </Section>
        )}
      </VStack>
    </>
  );
};
