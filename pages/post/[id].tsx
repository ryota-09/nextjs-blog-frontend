import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import useSWR from "swr";

import BlogBody from "../../components/organisms/BlogBody";
import BlogHeader from "../../components/organisms/BlogHeader";
import Layout from "../../components/organisms/Layout";
import { getAllArticleIds, getArticleByArticleId } from "../../lib/fetch";
import { Article } from "../../types/article";

type StaticArticle = {
  staticArticle: Article;
};

const axiosFetcher = async (/*articleId: string*/) => {
  const response = await axios.get<Article>(
    // `http://localhost:3003/article/articleDetail/${articleId}`
    "https://demo8969917.mockable.io/personal-media/23"
  );
  return response.data;
};

/**
 * ブログの詳細ページを表すコンポーネント.
 *
 * @returns - FC
 */
const ArticleDetail: FC<StaticArticle> = ({ staticArticle }) => {
  // SSG + CSR
  const { data: article, error } = useSWR(
    "articleFetcher",
    /* (articleId) => axiosFetcher(articleId) */ axiosFetcher,
    {
      fallbackData: staticArticle,
      revalidateOnMount: true,
    }
  );
  if (error) {
    return <span data-testid="error">Error</span>;
  }

  return (
    <>
      <Layout tabTitle="Article">
        {article && (
          <div>
            <BlogHeader
              key={article.id}
              title={article.title}
              summary={article.summary}
              imgPath={`https://source.unsplash.com/weekly?${article.imgPath}`}
              // imgPath={article.imgPath}
              createdAt={article.createdAt}
              updatedAt={article.updatedAt}
            />
            <BlogBody body={article.body} />
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
          </div>
        )}
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
