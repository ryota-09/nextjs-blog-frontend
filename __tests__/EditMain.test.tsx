import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import EditMain from "../components/templates/EditMain"

describe("templates/EditMain.tsx", () => {
  test("正常系: コンポーネントが正しくレンダリングされる", () => {
    render(<EditMain />)
    expect(screen.findByText("Edit Area")).toBeInTheDocument();
  })
})
