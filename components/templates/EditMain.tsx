import { FC, useEffect, useState } from "react";
import { Content } from "../../types/content";
import AddButton from "../atoms/Button/AddButton";
import EditBody from "../organisms/EditBody";
import EditHeader from "../organisms/EditHeader";

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
      <AddButton onClick={createNewContent} />
    </>
  );
};
export default EditMain;
