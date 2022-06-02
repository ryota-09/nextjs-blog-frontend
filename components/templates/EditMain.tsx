import { FC, useEffect, useState } from "react";
import { Content } from "../../types/content";
import AddButton from "../atoms/Button/AddButton";
import EditBody from "../organisms/EditBody";

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

  const createNewContent = () => {
    setContentArray([...contentArrayToSave]);
  };
  return (
    <>
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
