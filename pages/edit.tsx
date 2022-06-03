import { FC } from "react";
import EditMain from "../components/templates/EditMain";
import EditSidebar from "../components/templates/EditSidebar";
import Layout from "../components/organisms/Layout";

const Edit: FC = () => {
  return (
    <>
      <Layout tabTitle="Edit Page">
        <EditSidebar />
        <EditMain />
      </Layout>
    </>
  );
};
export default Edit;
