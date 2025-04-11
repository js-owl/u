import { rtkApi } from '1_shared/api/rtkApi';
import { Article } from '2_entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({ url: '/articles', params: { _limit: limit } })
    })
  })
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
