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

export const collections = {
  recipes,
};
