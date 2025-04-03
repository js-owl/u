import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text, TextSize } from "1_shared/ui/Text/Text";
import { Article, ArticleView } from "2_entities/Article/model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkelton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  isLoading?: boolean;
  articles: Article[];
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} className={cls.card} view={view} />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      className={cls.card}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t("not found")} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});

// Virtualization
// npm i react-virtualized@9.22.3 --save --force
// npm i -D @types/react-virtualized@9.21.21

// export const ArticleList = memo((props: ArticleListProps) => {
//   const {
//     className,
//     isLoading,
//     articles,
//     view = ArticleView.SMALL,
//     target,
//   } = props;
//   const { t } = useTranslation();

//   const isBig = view === ArticleView.BIG;

//   const itemsPerRow = isBig ? 1 : 3;
//   const rowCount = isBig
//     ? articles.length
//     : Math.ceil(articles.length / itemsPerRow);

//   const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
//     const items = [];
//     const fromIndex = index * itemsPerRow;
//     const toIndex = Math.min(fromIndex * itemsPerRow, articles.length);

//     for (let i = fromIndex; i < toIndex; i++) {
//       items.push(
//         <ArticleListItem
//           article={articles[i]}
//           view={view}
//           className={cls.card}
//           target={target}
//           key={`str${i}`}
//         />
//       );
//     }

//     return (
//       <div key={key} style={style} className={cls.row}>
//         {items}
//       </div>
//     );
//   };

//   if (!isLoading && !articles.length) {
//     return (
//       <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
//         <Text title={t("not found")} size={TextSize.L} />
//       </div>
//     );
//   }

//   return (
//     <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
//       {({
//         height,
//         width,
//         registerChild,
//         onChildScroll,
//         isScrolling,
//         scrollTop,
//       }) => (
//         <div
//           ref={registerChild}
//           className={classNames(cls.ArticleList, {}, [className, cls[view]])}
//         >
//           <List
//             height={height ?? 700}
//             rowCount={rowCount}
//             rowHeight={isBig ? 700 : 330}
//             rowRenderer={rowRenderer}
//             width={width ? width - 80 : 700}
//             autoHeight
//             onScroll={onChildScroll}
//             isScrolling={isScrolling}
//             scrollTop={scrollTop}
//           />
//           {isLoading && getSkeletons(view)}
//         </div>
//       )}
//     </WindowScroller>
//   );
// });
