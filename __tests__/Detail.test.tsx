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
      })
    );
  }),
];

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.restoreHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})


