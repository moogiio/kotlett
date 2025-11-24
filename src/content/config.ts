import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['flaskkotlett', 'lammkotlett', 'kalvkotlett', 'notkotlett', 'viltkotlett', 'fiskkotlett']),
    difficulty: z.enum(['enkel', 'medel', 'svar']),
    time: z.enum(['snabb', 'medel', 'lang']),
    cookTime: z.string(),
    servings: z.number(),
    description: z.string(),
    image: z.string(),
  }),
});

const poetry = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['haiku', 'klassisk', 'slam']),
    author: z.string().optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    inventory: z.number(),
    image: z.string(),
    description: z.string(),
    category: z.enum(['flaskkotlett', 'lammkotlett', 'kalvkotlett', 'notkotlett', 'viltkotlett', 'fiskkotlett']),
  }),
});

export const collections = {
  recipes,
  poetry,
  products,
};
