import NextLink from "next/link";
import { Box, Heading, Link } from "@chakra-ui/react";
import type { Posts } from "@prisma/client";
import type { FC } from "react";
import React from "react";
import { ImageWithOverlayContent } from "../../components/ImageWithText";
import { NoPostsDisplay } from "./NoPostsDisplay";
import { Section } from "../../components/Section";

export interface PostListDisplayProps {
  posts: Posts[];
}

export const PostListDisplay: FC<PostListDisplayProps> = (props) => {
  if (props.posts.length === 0) {
    return <NoPostsDisplay />;
  }

  return (
    <>
      {props.posts.map((i) => (
        <Link as={NextLink} href={`/posts/${i.id}`} key={i.id}>
          {i.imageUrl && i.content && (
            <Box
              as="article"
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
              _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
              transition="0.1s"
              cursor="pointer"
            >
              <ImageWithOverlayContent
                src={i.imageUrl}
                width={992}
                height={300}
              >
                <Heading as="h3" whiteSpace="pre" isTruncated height="1.3em">
                  {i.content}
                </Heading>
              </ImageWithOverlayContent>
            </Box>
          )}
          {i.imageUrl && !i.content && (
            <Box
              as="article"
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
              _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
              transition="0.1s"
              cursor="pointer"
            >
              <Box as="img" src={i.imageUrl} width={992} height={300} />
            </Box>
          )}
          {!i.imageUrl && i.content && (
            <Section
              as="article"
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
              _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
              transition="0.1s"
              cursor="pointer"
            >
              <Heading as="h3" whiteSpace="pre" isTruncated>
                {i.content}
              </Heading>
            </Section>
          )}
        </Link>
      ))}
    </>
  );
};
