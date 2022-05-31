import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SingleArticle from "../components/organisms/SingleArticle";


type Props = {
  id: number;
  title: string;
  sumary: string;
  imgPath: string;
};

describe("organismas/SingleArticle.tsx", () => {
  let dummyProps: Props;
  beforeEach(() => {
    dummyProps = {
      id: 0,
      title: "テストタイトル",
      sumary: "テストサマリー",
      imgPath: "テストImg",
    };
  });

  test("正常系: propsで渡された値が正しくレンダリングされる。", () => {
    render(<SingleArticle {...dummyProps} />);
    expect(dummyProps.title).toBeInTheDocument();
    expect(dummyProps.sumary).toBeInTheDocument();
  });
});
