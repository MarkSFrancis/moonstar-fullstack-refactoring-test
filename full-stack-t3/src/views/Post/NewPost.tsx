import type { FC } from "react";
import React from "react";
import { Section } from "../../components/Section";
import { api } from "../../utils/api";
import { PostForm } from "./PostForm";

export interface NewPostProps {
  onNewPost?: () => unknown;
}

export const NewPost: FC<NewPostProps> = (props) => {
  const submit = api.posts.create.useMutation({
    onSuccess: props.onNewPost,
  });

  return (
    <Section>
      <PostForm mutation={submit} onSubmit={(data) => submit.mutate(data)} />
    </Section>
  );
};
