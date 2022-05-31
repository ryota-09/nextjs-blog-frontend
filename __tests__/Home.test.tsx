import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { getPage, initTestHelpers } from "next-page-tester";
import { rest } from "msw";
import { setupServer } from "msw/node";

initTestHelpers();

const handler = [
  rest.get(
    "http://demo8925424.mockable.io/test/allArticle",
    (req, res, ctx) => {
      res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: "テストtitle1",
            summary: "テストsummary1",
            imgPath: "テストimgPath1",
            createdAt: "テストcreatedAt1",
            updatedAt: "テストupdatedAt1",
          },
          {
            id: 2,
            title: "テストtitle2",
            summary: "テストsummary2",
            imgPath: "テストimgPath2",
            createdAt: "テストcreatedAt2",
            updatedAt: "テストupdatedAt2",
          },
        ])
      );
    }
  ),
];

const server = setupServer(...handler);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => {
  server.close();
});

describe("pages/index.tsx", () => {
  test("正常系: SSRで生成されたpropsが正しくレンダリングされる。", async () => {
    const { page } = await getPage({
      route: "/",
    });
    render(page);
    expect(await screen.findByText("テストtitle1")).toBeInTheDocument();
    expect(await screen.findByText("テストtitle2")).toBeInTheDocument();
  });

  test("異常系: エラーが発生し、ArticleListがundefindeのときエラー文が表示される。", async () => {
    server.use(
      rest.get(
        "http://demo8925424.mockable.io/test/allArticle",
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );
    const { page } = await getPage({
      route: "/",
    });
    render(page);
    expect(await screen.getByTestId("error").textContent).toEqual("エラーが発生しました。")
  });
});
