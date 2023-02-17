import { Button, Container, VStack, Wrap } from "@chakra-ui/react";
import { IconCaretLeft } from "@tabler/icons-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { PostGuard } from "../../../views/Post/PostGuard";
import { EditPost } from "../../../views/Post/EditPost";

const EditPostPage: NextPage = () => {
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
          </Wrap>
          <PostGuard id={id as string}>
            {(post) => <EditPost post={post} />}
          </PostGuard>
        </VStack>
      </Container>
    </>
  );
};

export default EditPostPage;
