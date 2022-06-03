/**
 * 管理者ユーザーを表す型.
 */
export type User = {
  //ユーザーの型
  id: number;
  //ユーザーネーム
  name: string;
  //ユーザーのemailアドレス
  email: string;
  //ユーザーのパスワード
  password: string;
};
