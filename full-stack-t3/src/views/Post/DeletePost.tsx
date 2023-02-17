import { Button, useToast } from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";
import type { FC } from "react";
import React from "react";
import { api } from "../../utils/api";

export interface DeletePostProps {
  id: string;
}

export const DeletePost: FC<DeletePostProps> = (props) => {
  const toast = useToast({
    isClosable: true,
    duration: 3000,
    position: "top-right",
  });

  const { push: pushRoute } = useRouter();

  const deletePost = api.posts.deleteById.useMutation({
    onError: () => {
      toast({
        title: "Error",
        status: "error",
        description:
          "Something went wrong deleting this post. Please try again later",
      });
    },
    onSuccess: async () => {
      toast({
        title: "Success",
        status: "success",
        description: "Your post was successfully deleted",
      });

      await pushRoute("/");
    },
  });

  return (
    <Button
      colorScheme="red"
      leftIcon={<IconTrash />}
      onClick={() => deletePost.mutate(props.id)}
      isLoading={deletePost.isLoading}
    >
      Delete
    </Button>
  );
};
