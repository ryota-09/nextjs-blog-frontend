import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Dispatch, SetStateAction } from "react";
import EditHeader from "../components/organisms/EditHeader";

type Props = {
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setHeaderSummary: Dispatch<SetStateAction<string>>;
};

describe("templates/EditHeader.tsx", () => {
  let dummyProps: Props;
  dummyProps = {
    setHeaderTitle: jest.fn(),
    setHeaderImg: jest.fn(),
    setHeaderSummary: jest.fn()
  }
  test("正常系: コンポーネントが正しくレンダリングされる", async () => {
    render(<EditHeader {...dummyProps} />);
    expect(await screen.findByText("Article Title")).toBeInTheDocument();
  });
});
