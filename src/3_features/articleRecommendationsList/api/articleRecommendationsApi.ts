import { rtkApi } from '1_shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({ query: (limit) => ({ url: '/articles', params: { _limit: limit } }) })
  })
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
