import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
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
        <Link href="/">
        <div className="flex cursor-pointer mt-12 justify-center hover:text-blue-500">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <a data-testid="back-blog">一覧画面に戻る</a>
        </div>
      </Link>
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
    revalidate: 60,
  };
};
