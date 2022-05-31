import { Content } from "./content";

/**
 * 記事の型
 */
export type Article = {
  //主キー
  id?: number;
  //記事タイトル
  title: string;
  //記事あらすじ
  summary: string;
  //サムネイル
  imgPath: string;
  //作成日時
  createdAt: string;
  //更新日時
  updatedAt: string;
  //記事のコンテンツ
  body: Content[];
};
