import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SingleArticle from "../components/organisms/SingleArticle";

type Props = {
  id: number;
  title: string;
  sumary: string;
  imgPath: string;
  createdAt: string;
  updatedAt: string;
};

describe("organismas/SingleArticle.tsx", () => {
  let dummyProps: Props;
  beforeEach(() => {
    dummyProps = {
      id: 0,
      title: "テストタイトル",
      sumary: "テストサマリー",
      imgPath: "https://source.unsplash.com/random",
      createdAt: "テストcreatedTime",
      updatedAt: "テストupdatedTime",
    };
  });

  test("正常系: propsで渡された値が正しくレンダリングされる。", () => {
    render(<SingleArticle {...dummyProps} />);
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.sumary)).toBeInTheDocument();
  });

  test("異常系: updatedAtがから文字列の時、createdAtが表示される。", () => {});
});
