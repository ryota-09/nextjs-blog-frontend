/* eslint-disable react/display-name */
import { memo, useEffect, useState } from "react";
import { Dispatch, FC, SetStateAction } from "react";

import { Content } from "../../types/content";

type Props = {
  isUpdate: boolean;
  index: number;
  content: Content;
  contentArray: Content[];
  setContentArrayToSave: Dispatch<SetStateAction<Content[]>>;
};

/**
 * Content部分のコンポーネント.
 *
 * @params - props
 * @returns - FC
 */
const EditBody: FC<Props> = memo(
  ({ isUpdate, index, content, contentArray, setContentArrayToSave }) => {
    const [contentTitle, setContentTitle] = useState("");
    const [contentImg, setContentImg] = useState("");
    const [contentBody, setContentBody] = useState("");

    const changeArray = () => {
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
      setContentArrayToSave([...newContentArray]);
    };

    useEffect(() => {
      if (isUpdate) {
        setContentTitle(content.contentTitle);
        setContentImg(content.contentImg);
        setContentBody(content.contentBody);
      }
    }, []);

    return (
      <>
        <div onChange={changeArray}>
          <section>
            <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                <div className="w-full mx-auto">
                  <h3 className="text-xl font-bold">Cotent Title</h3>
                  <input
                    type="text"
                    placeholder="タイトル"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={contentTitle}
                    onChange={(e) => setContentTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                <div className="w-full mx-auto">
                  <h3 className="text-xl font-bold">Cotent Image</h3>
                  <p>※ アルファベットで入力 &nbsp;&nbsp;&nbsp;例: apple</p>
                  <input
                    type="text"
                    placeholder="Image"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={contentImg}
                    onChange={(e) => setContentImg(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue border-b-2 pb-20 border-blue-200">
                <div className="w-full mx-auto">
                  <h3 className="text-xl font-bold">Cotent Body</h3>
                  <textarea
                    placeholder="内容"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={contentBody}
                    onChange={(e) => setContentBody(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
);
export default EditBody;
