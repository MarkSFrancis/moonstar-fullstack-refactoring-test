import { Button, Container, VStack, Wrap } from "@chakra-ui/react";
import { IconCaretLeft, IconEdit, IconTrash } from "@tabler/icons-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { PostGuard } from "../../views/Post/PostGuard";
import { ViewPost } from "../../views/Post/ViewPost";
import { DeletePost } from "../../views/Post/DeletePost";

const ViewPostPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg" as="main" p={4}>
        <VStack align="stretch">
          <Wrap justify="space-between">
            <Button as={NextLink} href="/" leftIcon={<IconCaretLeft />}>
              Back to posts
            </Button>
            <Button
              as={NextLink}
              href={`/posts/${id as string}/edit`}
              leftIcon={<IconEdit />}
            >
              Edit
            </Button>
            <DeletePost id={id as string} />
          </Wrap>
          <PostGuard id={id as string}>
            {(post) => <ViewPost post={post} />}
          </PostGuard>
        </VStack>
      </Container>
    </>
  );
};

export default ViewPostPage;
