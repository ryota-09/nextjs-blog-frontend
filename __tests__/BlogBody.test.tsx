import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import BlogBody from "../components/organisms/BlogBody";

type Props = {
  contentTitle: string;
  contentImg: string;
  contentBody: string;
};

describe("organismas/BlogBody.tsx", () => {
  let dummyProps: Props;
  beforeEach(() => {
    dummyProps = {
      contentTitle: "テストボディーcontentTitle",
    contentImg: "テストボディーcontentImg",
    contentBody: "テストボディーcontentBody",
    };
  });

  test("正常系: propsで渡された値が正しくレンダリングされる。", () => {
    render(<BlogBody {...dummyProps} />);
    expect(screen.getByText(dummyProps.contentTitle)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.contentBody)).toBeInTheDocument();
  });
});
