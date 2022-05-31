import Layout from "../components/organisms/Layout";
import SingleArticle from "../components/organisms/SingleArticle";

const Home: React.FC = () => {
  return (
    <Layout tabTitle="Next Blog">
      <div className="grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-2">
        <SingleArticle id={1} title="タイトル" sumary="サマリー" imgPath="https://source.unsplash.com/random"  createdAt="createdTime" updatedAt="updatedTime"/>
      </div>
    </Layout>
  );
};
export default Home;
