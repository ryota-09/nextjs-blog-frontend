/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
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

  const { editorPageState, setEditorPageState } = useEditorContext();

  const postArticle = async () => {
    const postedArticle = {
      title: headerTitle,
      summary: headerSummary,
      imgPath: headerImg,
      body: [...contentArrayToSave],
    };
    // ここにpost文
    // await axios.post("http://localhost:3003/article/createArticle/",{
    //   ...postedArticle
    // })
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

  useEffect(() => {
    const lastNum = contentArrayToSave.length;
    setContentArrayToSave([
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
  }, [contentArray]);

  useEffect(() => {
    const setData = async () => {
      const response = await axiosFetcher();
      await setContentArray([...response.body]);
      setHeaderTitle(response.title);
      setHeaderImg(response.imgPath);
      setHeaderSummary(response.summary);
    };

    if (editorPageState.isUpdate) {
      setData();
    } 
  }, [editorPageState.isUpdate]);
  return (
    <>
      <div>
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
          <AddButton onClick={createNewContent} />
          <BaseButton onClick={postArticle}>新規作成</BaseButton>
          <BaseButton onClick={() => {}}>更新する</BaseButton>
          <DeleteButton onClick={() => {}}>削除する</DeleteButton>
        </div>
      </div>
    </>
  );
};
export default EditMain;
