import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import BlogHeader from "../components/organisms/BlogHeader";

type Props = {
  title: string;
  summary: string;
  imgPath: string;
  createdAt: string;
  updatedAt: string;
};

describe("organismas/BlogHeader.tsx", () => {
  let dummyProps: Props;
  beforeEach(() => {
    dummyProps = {
      title: "テストブログtitle",
      summary: "テストブログsummary",
      imgPath: "https://source.unsplash.com/random",
      createdAt: "テストブログcreatedAt",
      updatedAt: "テストブログupdatedAt",
    };
  });

  test("正常系: propsで渡された値が正しくレンダリングされる。", () => {
    render(<BlogHeader {...dummyProps} />);
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.summary)).toBeInTheDocument();
  });

  test("正常系: updatedAtが空文字列の時、createdAtが表示される。", () => {
    dummyProps = {
      title: "テストブログtitle",
      summary: "テストブログsummary",
      imgPath: "https://source.unsplash.com/random",
      createdAt: "テストブログcreatedAt",
      updatedAt: "テストブログupdatedAt",
    };
    render(<BlogHeader {...dummyProps} />);
    expect(screen.getByTestId("date-area").textContent).toEqual(
      dummyProps.createdAt
    );
  });

  test("正常系: updatedAtが存在する時、updatedAtが表示される。", () => {
    dummyProps = {
      title: "テストブログtitle",
      summary: "テストブログsummary",
      imgPath: "https://source.unsplash.com/random",
      createdAt: "テストブログcreatedAt",
      updatedAt: "テストブログupdatedAt",
    };
    render(<BlogHeader {...dummyProps} />);
    expect(screen.getByTestId("date-area").textContent).toEqual(
      dummyProps.updatedAt
    );
  });
});
