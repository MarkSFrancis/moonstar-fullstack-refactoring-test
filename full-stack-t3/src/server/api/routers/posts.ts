import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const postSchema = z
  .object({
    content: z.string().optional(),
    imageUrl: z.string().optional(),
  })
  .refine((val) => val.content || val.imageUrl, {
    path: ["content"],
    message: "Either content or Image URL must be set",
  });

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.posts.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.posts.findFirst({
      where: {
        id: input,
      },
    });
  }),
  create: publicProcedure.input(postSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.posts.create({
      data: {
        content: input.content,
        imageUrl: input.imageUrl,
      },
    });
  }),
  updateById: publicProcedure
    .input(
      z
        .object({
          id: z.string(),
          content: z.string().optional(),
          imageUrl: z.string().optional(),
        })
        .refine((val) => val.content || val.imageUrl, {
          path: ["content"],
          message: "Either content or Image URL must be set",
        })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.posts.update({
        where: {
          id: input.id,
        },
        data: {
          id: input.id,
          content: input.content,
          imageUrl: input.imageUrl,
        },
      });
    }),
  deleteById: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.posts.delete({
      where: {
        id: input,
      },
    });
  }),
});
