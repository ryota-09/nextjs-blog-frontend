import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import EditSidebar from "../components/templates/EditSidebar"

describe("templates/EditSidebar.tsx", () => {
  test("正常系: コンポーネントが正しくレンダリングされる", () => {
    render(<EditSidebar />)
    expect(screen.findByText("Edit Menu")).toBeInTheDocument();
  })
})
