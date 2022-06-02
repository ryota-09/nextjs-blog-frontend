import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import EditHeader from "../components/organisms/EditHeader";

describe("templates/EditHeader.tsx", () => {
  test("正常系: コンポーネントが正しくレンダリングされる", () => {
    render(<EditHeader />);
    expect(screen.findByText("Edit Area")).toBeInTheDocument();
  });
});
