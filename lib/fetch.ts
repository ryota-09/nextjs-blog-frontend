import fetch from "node-fetch";
import { Article } from "../types/article";

export const getAllArticles = async () => {
  try {
    const response = await fetch(
      new URL("http://demo8925424.mockable.io/test/allArticle")
    );
    console.log(response);
    const articleList: Omit<Article, "body"> = await response.json();
    return articleList;
  } catch (error) {
    alert(error);
  }
};
