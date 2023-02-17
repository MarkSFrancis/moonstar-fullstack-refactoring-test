/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { IconSend } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { api } from "../../utils/api";

export interface PostFormValues {
  content?: string;
  imageUrl?: string;
}

export interface PostFormProps {
  defaultValues?: PostFormValues;
  onSubmit: SubmitHandler<PostFormValues>;
  mutation: ReturnType<
    | typeof api.posts.create.useMutation
    | typeof api.posts.updateById.useMutation
  >;
}

export const PostForm: FC<PostFormProps> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    watch,
  } = useForm<PostFormValues>({
    defaultValues: props.defaultValues,
    resolver: zodResolver(
      z
        .object({
          content: z.string().optional(),
          imageUrl: z.string().optional(),
        })
        .refine((val) => val.content || val.imageUrl, {
          path: ["content"],
          message: "Either content or Image URL must be set",
        })
    ),
  });

  watch();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.onSubmit(data);
      })}
    >
      <VStack align="stretch" spacing={2}>
        <FormControl isInvalid={!!errors.content?.message}>
          <FormLabel>Content</FormLabel>
          <Input
            background="white"
            placeholder="What's on your mind? 🤔"
            {...register("content")}
          />
          <FormHelperText>
            Optional - required if the image URL is empty
          </FormHelperText>
          {errors.content ? (
            <FormErrorMessage color="red">
              {errors.content?.message}
            </FormErrorMessage>
          ) : (
            <></>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.imageUrl?.message}>
          <FormLabel>Image URL</FormLabel>
          <Input
            background="white"
            placeholder="https://..."
            {...register("imageUrl")}
            type="url"
          />
          <FormHelperText>
            Optional - required if the content is empty
          </FormHelperText>
          {errors.imageUrl ? (
            <FormErrorMessage>{errors.imageUrl?.message}</FormErrorMessage>
          ) : (
            <></>
          )}
        </FormControl>
        <Button
          isLoading={props.mutation.isLoading}
          alignSelf="flex-start"
          colorScheme="teal"
          disabled={!isValid}
          type="submit"
          rightIcon={<IconSend />}
        >
          Share
        </Button>
        {props.mutation.isSuccess && (
          <Alert status="success">
            <AlertIcon /> Your post has been published! Thanks for sharing 🥰
          </Alert>
        )}
        {props.mutation.isError && (
          <Alert status="error">
            <AlertIcon /> Something went wrong and we couldn&apos;t save your
            post. Please try again later
          </Alert>
        )}
      </VStack>
    </form>
  );
};
