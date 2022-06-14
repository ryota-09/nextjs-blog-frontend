export {};

describe("一般ユーザーがブログを閲覧するために、サイトに訪れた場合の行動フローの総合テスト", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");
  });

  it("ユーザーがHomeページを訪れたとき、記事一覧が正しく表示される。", () => {
    cy.request("http://demo8969917.mockable.io/allArticles").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("ユーザーがHomeページを訪れたとき、一つの記事の「続きを読む」をクリックすると、詳細ページに遷移する", () => {
    cy.request("https://demo8969917.mockable.io/personal-media/23").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    cy.get("#detail-button").click();
  });

  it("詳細ページの戻るボタンをクリックするとHomeページに正しく戻る", () => {
    cy.visit("http://localhost:3000/post/1");
    cy.get("#index-back-button").click();
  });
});
