import { defaultHead } from "next/head";
import { FC } from "react";
import BlogBody from "../../components/organisms/BlogBody";
import BlogHeader from "../../components/organisms/BlogHeader";
import Layout from "../../components/organisms/Layout";
/**
 * ブログの詳細ページを表すコンポーネント.
 * 
 * @returns - FC
 */
const ArticleDetail: FC = () => {
  return (
    <>
      <Layout tabTitle="詳細ページ">
        <BlogHeader
          title="テストブログtitle"
          summary="テストブログsummaryテストブログsummaryテストブログsummaryテストブログsummaryテストブログsummaryテストブログsummaryテストブログsummaryテストブログsummaryテストブログsummaryテストブログsummary"
          imgPath="https://source.unsplash.com/random"
          createdAt="テストブログcreatedAt"
          updatedAt="テストブログupdatedAt"
        />
        <BlogBody contentTitle="テストボディーcontentTitle" contentImg="https://source.unsplash.com/random" contentBody="テストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテスト

ボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディー

contentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBodyテストボディーcontentBody"/>
      </Layout>
    </>
  );
};
export default ArticleDetail;
