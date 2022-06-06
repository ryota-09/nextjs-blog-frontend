import fetch from "node-fetch";

export const getAllArticles = async () => {
  const response = await fetch(
    // new URL("http://localhost:3003/article/articleList/")
    new URL("http://demo8969917.mockable.io/allArticles")
  );
  const articleList = await response.json();
  return articleList;
};

export const getArticleByArticleId = async (articleId: string) => {
  const response = await fetch(
    // new URL(`http://localhost:3003/article/articleDetail/${articleId}`)
    new URL("https://demo8969917.mockable.io/personal-media/23")
  );
  const articleData = await response.json();
  return articleData;
};

export const getAllArticleIds = async () => {
  const response = await fetch(
    // new URL("http://localhost:3003/article/articleList/")
    new URL('http://demo8969917.mockable.io/allArticles')
  )
  const articleList = await response.json()
  return articleList.map((article: any) => {
    return {
      params: {
        id: String(article.id),
      },
    }
  })
}
