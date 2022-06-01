import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { getPage, initTestHelpers } from "next-page-tester";
import { rest } from "msw";
import { SWRConfig } from "swr";
import { setupServer } from "msw/node";

import { Article } from "../types/article";
import Home from "../pages/index";
import userEvent from "@testing-library/user-event";

initTestHelpers();

const handler = [
  rest.get("http://demo8969917.mockable.io/allArticles", (req, res, ctx) => {
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
  }),
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
  let staticProps: Omit<Article, "body">[];
  staticProps = [
    {
      id: 3,
      title: "テストtitle3",
      summary: "テストsummary3",
      imgPath: "テストimgPath3",
      createdAt: "テストcreatedAt3",
      updatedAt: "テストupdatedAt3",
    },
    {
      id: 4,
      title: "テストtitle4",
      summary: "テストsummary4",
      imgPath: "テストimgPath4",
      createdAt: "テストcreatedAt4",
      updatedAt: "テストupdatedAt4",
    },
  ];
  test("正常系: SSG + CSRで生成されたpropsが正しくレンダリングされる。", async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Home staticArticleList={staticProps} />
      </SWRConfig>
    );
    expect(await screen.findByText("テストtitle3")).toBeInTheDocument();
    expect(screen.getByText("テストtitle4")).toBeInTheDocument();
    expect(await screen.findByText("テストtitle1")).toBeInTheDocument();
    expect(screen.getByText("テストtitle2")).toBeInTheDocument();
  });

  test("正常系: 記事のボタンを押すと、詳細ページに正しく遷移する。", async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Home staticArticleList={staticProps} />
      </SWRConfig>
    );
    expect(await screen.findByText("テストtitle3")).toBeInTheDocument();
    await userEvent.click(screen.getAllByText("続きを読む")[1]);
    expect(await screen.findByText("詳細ページ")).toBeInTheDocument();
  });

  test("異常系: エラーが発生し、エラー文が表示される。", async () => {
    server.use(
      rest.get(
        "http://demo8969917.mockable.io/allArticles",
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Home staticArticleList={staticProps} />
      </SWRConfig>
    );
    expect(await screen.findByText("Error")).toBeInTheDocument();
  });
});
