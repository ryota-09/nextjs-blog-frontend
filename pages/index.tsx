import axios from "axios";
import { GetStaticProps } from "next";
import useSWR from "swr";

import Layout from "../components/organisms/Layout";
import SingleArticle from "../components/organisms/SingleArticle";
import { getAllArticles } from "../lib/fetch";
import { Article } from "../types/article";
import { StaticArticle } from "../types/staticArticle";

type  ArticleList = {
  staticArticleList: StaticArticle[];
};

const axiosFetcher = async () => {
  const response = await axios.get<StaticArticle[]>(
    "http://demo8969917.mockable.io/allArticles"
  );
  return response.data;
};

/**
 * 記事一覧ページ.
 *
 * @param - staticProps(記事リスト)
 * @returns - FC
 */
const Home: React.FC<ArticleList> = ({ staticArticleList }) => {
  // SSG + CSR
  const { data: articleList, error } = useSWR(
    "articleListFetcher",
    axiosFetcher,
    {
      fallbackData: staticArticleList,
      revalidateOnMount: true,
    }
  );
  if (error) {
    return <span data-testid="error">Error</span>;
  }
  return (
    <Layout tabTitle="Next Blog">
      <div className="grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-2 container mx-auto p-5 md:flex-row">
        {/* {articleList && <button onClick={() => console.log(staticArticleList)}>ボタン</button>} */}
        {articleList &&
          articleList.map((article) => (
            <SingleArticle
              key={article.id}
              id={article.id ?? 0}
              title={article.title}
              sumary={article.summary}
              imgPath="https://source.unsplash.com/weekly?food"
              createdAt={article.createdAt}
              updatedAt={article.updatedAt}
            />
          ))}
      </div>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const staticArticles = await getAllArticles();
  return {
    props: {
      staticArticles,
    },
    // ISRの設定(60sで静的生成)
    revalidate: 60,
  };
};
