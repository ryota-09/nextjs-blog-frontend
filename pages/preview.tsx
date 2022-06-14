import Link from "next/link";
import { FC, useEffect } from "react";

import BlogBody from "../components/organisms/BlogBody";
import BlogHeader from "../components/organisms/BlogHeader";
import Layout from "../components/organisms/Layout";
import { useEditorContext } from "../lib/useEditorPage";

const Preview: FC = () => {
  const { editorPageState, setEditorPageState } = useEditorContext();
  const { id, title, summary, imgPath, createdAt, updatedAt, body } =
    editorPageState.previewPageData;

  const toggleIsEditorPage = () => {
    setEditorPageState({
      type: "TOGGLE_ISEDITORPAGE",
      payload: {
        isEditorPage: true,
      },
    });
  };
  return (
    <>
      <Layout tabTitle="Preview">
        {editorPageState.previewPageData && (
          <div>
            <BlogHeader
              key={id}
              title={title}
              summary={summary}
              imgPath={`https://source.unsplash.com/weekly?${imgPath}`}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
            <BlogBody body={body} />
            <Link href="/edit">
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
                <a data-testid="back-edit" onClick={toggleIsEditorPage}>
                  編集画面に戻る
                </a>
              </div>
            </Link>
          </div>
        )}
      </Layout>
    </>
  );
};
export default Preview;
