import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "2_entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
}
