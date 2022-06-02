import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Dispatch, SetStateAction } from "react";

import EditBody from "../components/organisms/EditBody"
import { Content } from "../types/content";

type Props = {
  isUpdated: boolean;
  index: number;
  content: Content;
  contentArray: Content[];
  setContentArrayToSave: Dispatch<SetStateAction<Content[]>>;
};

describe("templates/EditMain.tsx", () => {
  let dummyProps: Props;
  dummyProps = {
    isUpdated: false,
    index: 0,
    content: {
      id: 0,
      contentTitle: "タイトル１",
      contentImg: "/dummy",
      contentBody: "ボディー１",
      orderNumber: 0,
      articleId: 0
    },
    contentArray: [
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
    ],
    setContentArrayToSave: jest.fn()
  }
  test("正常系: コンポーネントが正しくレンダリングされる", async () => {
    render(<EditBody {...dummyProps} />)
    expect(await screen.findByText("Cotent Title")).toBeInTheDocument();
  })
})
