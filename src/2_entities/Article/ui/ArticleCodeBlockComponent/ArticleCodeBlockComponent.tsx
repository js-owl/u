import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Code } from "1_shared/ui/Code/Code";
import { ArticleCodeBlock } from "../../model/types/article";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}
export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        <Code>{block.code}</Code>
      </div>
    );
  }
);
