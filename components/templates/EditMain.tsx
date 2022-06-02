import { FC, useEffect, useState } from "react";
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

  const createNewContent = () => {
    setContentArray([...contentArrayToSave]);
  };
  return (
    <>
      <div>
        <EditHeader
          setHeaderTitle={setHeaderTitle}
          setHeaderImg={setHeaderImg}
          setHeaderSummary={setHeaderSummary}
        />
        {contentArray.map((content, index) => (
          <EditBody
            key={index}
            isUpdated={false}
            index={index}
            content={content}
            contentArray={contentArray}
            setContentArrayToSave={setContentArrayToSave}
          />
        ))}
        <div>
          <AddButton onClick={createNewContent} />
          <BaseButton onClick={() => {}}>新規作成</BaseButton>
          <BaseButton onClick={() => {}}>更新する</BaseButton>
          <DeleteButton onClick={() => {}}>削除する</DeleteButton>
        </div>
      </div>
    </>
  );
};
export default EditMain;
