import Link from "next/link";
import { FC } from "react";

import BlogBody from "../components/organisms/BlogBody";
import BlogHeader from "../components/organisms/BlogHeader";
import Layout from "../components/organisms/Layout";
import { useEditorContext } from "../lib/useEditorPage";


const Preview: FC = () => {
  const { editorPageState } = useEditorContext();
  const { id, title, summary, imgPath, createdAt, updatedAt, body } = editorPageState.previewPageData;
  return (
    <>
    <Layout tabTitle="Preview">
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
  )
};
export default Preview;
