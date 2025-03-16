import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text } from "1_shared/ui/Text/Text";
import cls from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "../../model/types/article";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((p, idx) => (
          <Text key={p} text={p} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);
