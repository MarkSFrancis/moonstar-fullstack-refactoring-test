import type { Posts } from "@prisma/client";
import type { FC } from "react";
import { useCallback } from "react";
import React from "react";
import { Section } from "../../components/Section";
import { api } from "../../utils/api";
import type { PostFormValues } from "./PostForm";
import { PostForm } from "./PostForm";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

export interface EditPostProps {
  post: Posts;
}

export const EditPost: FC<EditPostProps> = (props) => {
  const toast = useToast({
    isClosable: true,
    duration: 3000,
    position: "top-right",
  });
  const { push: pushRoute } = useRouter();
  const post = api.posts.updateById.useMutation({
    onSuccess: async () => {
      toast({
        status: "success",
        title: "Success",
        description: "Your changes have been shared",
      });
      await pushRoute(`/posts/${props.post.id}`);
    },
  });

  const handleSubmit = useCallback(
    (formValues: PostFormValues) => {
      console.log({ formValues });
      post.mutate({
        ...formValues,
        id: props.post.id,
      });
    },
    [post, props.post]
  );

  return (
    <Section>
      <PostForm
        defaultValues={{
          content: props.post.content ?? undefined,
          imageUrl: props.post.imageUrl ?? undefined,
        }}
        mutation={post}
        onSubmit={handleSubmit}
      />
    </Section>
  );
};
