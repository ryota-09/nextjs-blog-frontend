import axios from "axios";
import { FC } from "react";
import useSWR from "swr";
import { useEditorContext } from "../../lib/useEditorPage";

import { Article } from "../../types/article";
import Menu from "../molecules/Menu";

const axiosFetcher = async () => {
  const response = await axios.get<Article[]>(
    "http://demo8969917.mockable.io/allArticles"
  );
  return response.data;
};

/**
 * エディット画面のサイドバーを表すコンポーネント.
 *
 * @returns - FC
 */
const EditSidebar: FC = () => {
  const { data: articleList, error } = useSWR("fetchArticleList", axiosFetcher);
  const { setEditorPageState } = useEditorContext();

  if (error) {
    return <span>Error</span>;
  }

  const toCreatePage = () => {
    setEditorPageState({
      type: "TOGGLE_ISUPDATE",
      payload: {
        isUpdate: false,
      },
    });
    setEditorPageState({
      type: "SET_EDITORPAGEID",
      payload: {
        editorPageId: 0,
      },
    });
    setEditorPageState({
      type: "SET_PREVIEWPAGEDATA",
      payload: {
        previewPageData: {
          id: 0,
          title: "",
          summary: "",
          imgPath: "",
          createdAt: "",
          updatedAt: "",
          body: [],
        },
      },
    });
  };

  const toUpdatePage = (articleId: number) => {
    setEditorPageState({
      type: "TOGGLE_ISUPDATE",
      payload: {
        isUpdate: true,
      },
    });
    setEditorPageState({
      type: "SET_EDITORPAGEID",
      payload: {
        editorPageId: articleId,
      },
    });
    setEditorPageState({
      type: "SET_PREVIEWPAGEDATA",
      payload: {
        previewPageData: {
          id: articleId,
          title: "",
          summary: "",
          imgPath: "",
          createdAt: "",
          updatedAt: "",
          body: [],
        },
      },
    });
  };

  return (
    <>
      <div className="flex overflow-hidden bg-white rounded-lg">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-80">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <div className="px-8 text-left focus:outline-none">
                  <h2 className="block p-2 text-xl font-medium tracking-tighter text-gray-900 transition duration-500 ease-in-out transform hover:text-gray-900">
                    Edit Menu
                  </h2>
                </div>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-white">
                  <p className="px-4 pt-4 font-medium text-gray-900 uppercase">
                    Create
                  </p>
                  <ul>
                    <Menu menuTitle="新規作成" onClick={toCreatePage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Menu>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-white">
                  <p className="px-4 pt-4 font-medium text-gray-900 uppercase">
                    Update
                  </p>
                  <ul>
                    {articleList &&
                      articleList.map((article, index) => (
                        <Menu
                          key={index}
                          menuTitle={`${index + 1}. ${article.title}`}
                          onClick={() => toUpdatePage(article.id ?? 0)}
                        ></Menu>
                      ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSidebar;
