import fetch from "node-fetch";

export const getAllArticles = async () => {
  const response = await fetch(
    new URL("http://demo8969917.mockable.io/allArticles")
  );
  const articleList = await response.json();
  return articleList;
};

export const getArticleByArticleId = async (articleId: number) => {
  const response = await fetch(
    new URL("https://demo8969917.mockable.io/personal-media/23")
  );
  const articleData = await response.json();
  return articleData;
};
