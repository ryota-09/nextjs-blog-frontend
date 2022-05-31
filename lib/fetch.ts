import fetch from "node-fetch";

export const getAllArticles = async () => {
  const response = await fetch(
    new URL("http://demo8969917.mockable.io/allArticles")
  );
  const articleList = await response.json();
  return articleList;
};
