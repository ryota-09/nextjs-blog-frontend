import { FC, useEffect, useState } from "react";
import { Content } from "../../types/content";
import AddButton from "../atoms/Button/AddButton";
import EditBody from "../organisms/EditBody";

const dummyArray: Content[] = [
  {
    id: 0,
    contentTitle: "タイトル１",
    contentImg: "/dummy",
    contentBody: "ボディー１",
    orderNumber: 0,
    articleId: 0
  },
  {
    id: 1,
    contentTitle: "タイトル2",
    contentImg: "/dummy",
    contentBody: "ボディー2",
    orderNumber: 1,
    articleId: 0
  }
]

const EditMain: FC = () => {
  const [ contentArray, setContentArray ] = useState<Content[]>([...dummyArray]);
  const [ contentArrayToSave, setContentArrayToSave ] = useState<Content[]>([...dummyArray]);
  const [pushTrigger, setPushTrigger] = useState(false);
  const submit = () => {
    setContentArray([
      ...contentArrayToSave
    ])
  }
  return (
    <>
    {contentArray.map((content, index) => (
      <EditBody key={index} isUpdated={false}  index={index} content={content} contentArray={contentArray} setContentArrayToSave={setContentArrayToSave}/>
    ))}
    <AddButton onClick={() => {}}/>
    <button onClick={submit}>ボタン</button>
    </>
  )
}
export default EditMain;
