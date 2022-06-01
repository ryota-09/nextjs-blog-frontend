import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { getPage, initTestHelpers } from "next-page-tester";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

initTestHelpers();

const handlers = [
  rest.get(
    "http://demo8925424.mockable.io/test/allArticle",
    (req, res, ctx) => {
      return res(
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
  rest.get("http://demo8925424.mockable.io/test/article", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: "テストtitle1",
        summary: "テストsummary1",
        imgPath: "テストimgPath1",
        createdAt: "テストcreatedAt1",
        updatedAt: "テストupdatedAt1",
        body: [
          {
            id: 1,
            contentTitle: "テストcontentTitle1",
            contentImg: "テストcontentImg1",
            contentBody: "テストcontentBody1",
            orderNumber: 1,
            articleId: 1,
          },
          {
            id: 2,
            contentTitle: "テストcontentTitle2",
            contentImg: "テストcontentImg2",
            contentBody: "テストcontentBody2",
            orderNumber: 2,
            articleId: 1,
          },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);
beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.restoreHandlers();
  cleanup();
});
afterAll(() => {
  server.close();
});

describe("pages/post/[id].tsx", () => {
  test("正常系: indexページから詳細ページに正しく遷移する。", async () => {
    const { page } = await getPage({
      route: "/",
    });
    render(page);
    expect(await screen.findByText("テストtitle1")).toBeInTheDocument();
    await userEvent.click(screen.getAllByTestId("basebutton")[0]);
    expect(await screen.findByText("")).toBeInTheDocument();
    expect(screen.getByText("テストcontentTitle1")).toBeInTheDocument();
    expect(screen.getByText("テストcontentTitle2")).toBeInTheDocument();
  });

  test("正常系: 詳細ページからindexページに正しく遷移する。", async () => {
    const { page } = await getPage({
      route: "/post/1",
    });
    expect(await screen.findByText("テストtitle1")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("back-to-home"));
    expect(await screen.getByText("テストtitle2")).toBeInTheDocument();
  });
});
