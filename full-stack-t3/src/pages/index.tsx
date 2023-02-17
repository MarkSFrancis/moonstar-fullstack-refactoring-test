import { Container, Heading, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";
import { NewPost } from "../views/Post/NewPost";
import { PostList } from "../views/PostList/PostList";

const Home: NextPage = () => {
  const posts = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Check out all the latest posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg" as="main" p={4}>
        <VStack align="stretch" spacing={4}>
          <Heading as="h1" size="2xl">
            Feed
          </Heading>
          <NewPost onNewPost={() => posts.refetch()} />
          <PostList posts={posts} />
        </VStack>
      </Container>
    </>
  );
};

export default Home;
