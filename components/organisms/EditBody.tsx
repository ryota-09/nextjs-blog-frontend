/* eslint-disable react/display-name */
import { memo, useEffect, useState } from "react";
import { Dispatch, FC, SetStateAction } from "react";
import { Content } from "../../types/content";

type Props = {
  isUpdated: boolean;
  index: number;
  content: Content;
  contentArray: Content[];
  setContent2Array: Dispatch<SetStateAction<Content[]>>;
};

const EditBody: FC<Props> = memo(
  ({ isUpdated, index, content, contentArray, setContent2Array }) => {
    const [contentTitle, setContentTitle] = useState("");
    const [contentImg, setContentImg] = useState("");
    const [contentBody, setContentBody] = useState("");
    const changeArray = () => {
      console.log(`レンダリング${index}`);
      const newContentArray: Content[] = [];
      let updateContent: Content;
      for (let contentObj of contentArray) {
        if (contentObj.orderNumber === index) {
          updateContent = {
            id: content.id,
            contentTitle: contentTitle,
            contentImg: contentImg,
            contentBody: contentBody,
            orderNumber: content.orderNumber,
            articleId: content.articleId,
          };
          newContentArray.push(updateContent);
        } else {
          newContentArray.push(contentObj);
        }
      }
      setContent2Array([...newContentArray]);
    };
    return (
      <>
        <div onChange={changeArray}>
          <span>Title</span>
          <br />
          <input
            type="text"
            onChange={(e) => setContentTitle(e.target.value)}
          />
          <br />
          <span>Img</span>
          <br />
          <input type="text" onChange={(e) => setContentImg(e.target.value)} />
          <br />
          <span>Body</span>
          <br />
          <input type="text" onChange={(e) => setContentBody(e.target.value)} />
        </div>
        <br />
        {contentTitle}
        <br />
        {contentImg}
        <br />
        {contentBody}
        <br />
      </>
    );
  }
);
export default EditBody;
