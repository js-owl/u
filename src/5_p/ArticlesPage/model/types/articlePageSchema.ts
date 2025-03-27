import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "2_entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  view: ArticleView;
  error?: string;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited?: boolean;
}
