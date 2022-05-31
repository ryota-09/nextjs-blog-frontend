/**
 * 記事のコンテンツの型.
 */
export type Content = {
  //主キー
  id: number;
  //bodyのタイトル
  contentTitle: string;
  //bodyのimg
  contentImg: string;
  //bodyのcontent
  contentBody: string;
  //bodyの順序
  orderNumber: number;
  //該当するarticleとの外部キー
  articleId: number;
};
