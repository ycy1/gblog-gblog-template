import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { getArticlesApi } from "@api/article";
export const server = {
  searchArticles: defineAction({
    input: z.object({
      keyword: z.string(),
      categoryId: z.string().optional(),
      pageNum: z.number().optional(),
      pageSize: z.number().optional(),
    }),
    handler:  async (params) => {
    console.log(params);
    const resultsContainer = await getArticlesApi(params);
    return resultsContainer.data.records;
  },
  })
}