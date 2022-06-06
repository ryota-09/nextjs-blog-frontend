/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { FC, useEffect, useState } from "react";

import { useEditorContext } from "../../lib/useEditorPage";
import { Article } from "../../types/article";
import { Content } from "../../types/content";
import AddButton from "../atoms/Button/AddButton";
import BaseButton from "../atoms/Button/BaseButton";
import DeleteButton from "../atoms/Button/DeleteButton";
import EditBody from "../organisms/EditBody";
import EditHeader from "../organisms/EditHeader";

const axiosFetcher = async () => {
  const response = await axios.get<Article>(
    "https://demo8969917.mockable.io/personal-media/23"
  );
  return response.data;
};

/**
 * 編集画面のメイン部分のコンポーネント.
 *
 * @returns - FC
 */
const EditMain: FC = () => {
  const [contentArray, setContentArray] = useState<Content[]>([]);
  const [contentArrayToSave, setContentArrayToSave] = useState<Content[]>([]);
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerImg, setHeaderImg] = useState("");
  const [headerSummary, setHeaderSummary] = useState("");

  const [renderingCount, setRenderingCount] = useState(0);

  const { editorPageState, setEditorPageState } = useEditorContext();

  const postArticle = async () => {
    const targetArticle = {
      title: headerTitle,
      summary: headerSummary,
      imgPath: headerImg,
      body: [...contentArrayToSave],
    };
    // ここにpost文
    // await axios.post("http://localhost:3003/article/createArticle/",{
    //   ...postedArticle
    // })
    console.log(targetArticle);
    router.push("/");
  };

  const deleteArticle = async (articleId: number) => {
    // await axios.delete(`http://localhost:3003/article/articleDelete/${articleId}`);
    setEditorPageState({
      type: "SET_EDITORPAGEID",
      payload: {
        isUpdate: false,
        editorPageId: 0,
      },
    });
    router.push("/");
  };

  const createNewContent = () => {
    const lastNum = contentArrayToSave.length;
    setContentArray([
      ...contentArrayToSave,
      {
        id: lastNum,
        contentTitle: "",
        contentImg: "",
        contentBody: "",
        orderNumber: lastNum,
        articleId: 1,
      },
    ]);
  };

  const setPreviewData = () => {
    setEditorPageState({
      type: "SET_PREVIEWPAGEDATA",
      payload: {
        previewPageData: {
          id: 1,
          title: headerTitle,
          summary: headerSummary,
          imgPath: headerImg,
          createdAt: "2022",
          updatedAt: "2022",
          body: [...contentArrayToSave],
        },
      },
    });
    setHeaderTitle("");
    setHeaderImg("");
    setHeaderSummary("");
    setContentArrayToSave([]);
    setContentArray([]);
  };

  useEffect(() => {
    const lastNum = contentArrayToSave.length;
    if (renderingCount !== 0) {
      setContentArrayToSave([
        ...contentArrayToSave,
        {
          id: lastNum,
          contentTitle: "",
          contentImg: "",
          contentBody: "",
          orderNumber: lastNum,
          articleId: editorPageState.editorPageId ?? 1,
        },
      ]);
    }
    setRenderingCount((prev) => prev + 1);
  }, [contentArray]);

  useEffect(() => {
    const setData = async () => {
      const response = await axiosFetcher();
      console.log(response.body);
      await setContentArray([...response.body]);
      setHeaderTitle(response.title);
      setHeaderImg(response.imgPath);
      setHeaderSummary(response.summary);
    };
    if (editorPageState.isUpdate) {
      setData();
    } else {
      setHeaderTitle("");
      setHeaderImg("");
      setHeaderSummary("");
      setContentArrayToSave([]);
      setContentArray([]);
    }
  }, [editorPageState.isUpdate]);

  useEffect(() => {
    setRenderingCount(0);
    if (editorPageState.previewPageData.title !== "") {
      setHeaderTitle(editorPageState.previewPageData.title);
      setHeaderImg(editorPageState.previewPageData.imgPath);
      setHeaderSummary(editorPageState.previewPageData.summary);
      setContentArrayToSave([...editorPageState.previewPageData.body]);
      setContentArray([...editorPageState.previewPageData.body]);
    }
  }, []);
  return (
    <>
      <div className="">
        <h1 className="mt-6 mb-6 text-3xl font-extrabold text-center text-neutral-600">
          {editorPageState.isUpdate ? "Update Page" : "Create Page"}
        </h1>
        <div className="text-center mt-10">
          <Link href="/preview">
            <a>
              <BaseButton onClick={setPreviewData}>プレビュー</BaseButton>
            </a>
          </Link>
        </div>
        <EditHeader
          isUpdate={editorPageState.isUpdate}
          headerTitle={headerTitle}
          headerSummary={headerSummary}
          headerImg={headerImg}
          setHeaderTitle={setHeaderTitle}
          setHeaderImg={setHeaderImg}
          setHeaderSummary={setHeaderSummary}
        />
        {contentArray.map((content, index) => (
          <EditBody
            key={index}
            isUpdate={editorPageState.isUpdate}
            index={index}
            content={content}
            contentArray={contentArray}
            setContentArrayToSave={setContentArrayToSave}
          />
        ))}
        <div>
          <div className="text-center">
            <AddButton onClick={createNewContent} />
          </div>
          {editorPageState.isUpdate ? (
            <div className="text-center mt-10 mb-10">
              <span className="mr-5">
                <BaseButton onClick={postArticle}>更新する</BaseButton>
              </span>
              <span className="ml-5">
                <DeleteButton
                  onClick={() => deleteArticle(editorPageState.editorPageId)}
                >
                  削除する
                </DeleteButton>
              </span>
            </div>
          ) : (
            <div className="text-center mt-10">
              <BaseButton onClick={postArticle}>新規作成</BaseButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default EditMain;
