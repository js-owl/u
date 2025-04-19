import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from '@/1_shared/types';
import {
  Article,
  ArticleView,
  ArticleSortField,
  ArticleType
} from '@/2_entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  _inited?: boolean;
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
}
