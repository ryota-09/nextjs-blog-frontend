import { FC, useEffect, useState } from "react";
import { useEditorContext } from "../../lib/useEditorPage";
import { Content } from "../../types/content";
import AddButton from "../atoms/Button/AddButton";
import BaseButton from "../atoms/Button/BaseButton";
import DeleteButton from "../atoms/Button/DeleteButton";
import EditBody from "../organisms/EditBody";
import EditHeader from "../organisms/EditHeader";

/**
 * 編集画面のメイン部分のコンポーネント.
 *
 * @returns - FC
 */
const EditMain: FC = () => {
  const [contentArray, setContentArray] = useState<Content[]>([
    {
      id: 0,
      contentTitle: "",
      contentImg: "",
      contentBody: "",
      orderNumber: 0,
      articleId: 0,
    },
  ]);
  const [contentArrayToSave, setContentArrayToSave] = useState<Content[]>([]);
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerImg, setHeaderImg] = useState("");
  const [headerSummary, setHeaderSummary] = useState("");

  const { editorPageState, setUsereditorPageState } = useEditorContext();

  const postArticle = () => {
    const postedArticle = {
      title: headerTitle,
      summary: headerSummary,
      imgPath: headerImg,
      body: [...contentArrayToSave],
    };
    console.log(postedArticle);
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
