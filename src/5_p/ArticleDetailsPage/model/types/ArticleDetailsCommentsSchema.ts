import { Comment } from "2_entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
