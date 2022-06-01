import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import Menu from "../components/molecules/Menu";

type Props = {
  menuTitle: string;
  children?: ReactNode;
}

describe("molcules/Menu.tsx", () => {
  test("正常系: コンポーネントが正しくレンダリングされる", () => {
    let dummyProps: Props;
    dummyProps = {
      menuTitle: "dummy Title",
    }
    render(
      <Menu {...dummyProps}>
        <span>dummyComp</span>
      </Menu>
    );
    expect(screen.findByText("dummy Title")).toBeInTheDocument();
    expect(screen.findByText("dummyComp")).toBeInTheDocument();
  });
});
