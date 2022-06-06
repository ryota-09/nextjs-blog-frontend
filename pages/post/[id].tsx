import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

import BlogBody from "../../components/organisms/BlogBody";
import BlogHeader from "../../components/organisms/BlogHeader";
import Layout from "../../components/organisms/Layout";
import { getAllArticleIds, getArticleByArticleId } from "../../lib/fetch";
import { Article } from "../../types/article";

/**
 * ブログの詳細ページを表すコンポーネント.
 *
 * @returns - FC
 */
const ArticleDetail: FC<Article> = ({
  id,
  title,
  summary,
  imgPath,
  createdAt,
  updatedAt,
  body,
}) => {
  return (
    <>
      <Layout tabTitle="詳細ページ">
        <BlogHeader
          key={id}
          title={title}
          summary={summary}
          imgPath="https://source.unsplash.com/weekly?food"
          // imgPath={imgPath}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
        <BlogBody body={body} />
      </Layout>
    </>
  );
};
export default ArticleDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    throw new Error("");
  }
  const article = await getArticleByArticleId(context.params.id as string);
  return {
    props: {
      // これによって上記のFCの引数通りに渡される。
      ...article,
    },
  };
};
