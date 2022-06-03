import { FC } from "react";
import EditMain from "../components/templates/EditMain";
import EditSidebar from "../components/templates/EditSidebar";
import Layout from "../components/organisms/Layout";

const Edit: FC = () => {
  return (
    <>
      <Layout tabTitle="Edit Page">
        <div className="flex">
          <div>
            <EditSidebar />
          </div>
          <div className="w-full">
            <EditMain />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Edit;
