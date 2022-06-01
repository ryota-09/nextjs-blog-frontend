import { FC } from "react";

type Props = {
  contentTitle: string;
  contentImg: string;
  contentBody: string;
};
/**
 * 記事のボディ部分を表すコンポーネント.
 *
 * @params - props(記事のボディ)
 * @returns - FC
 */
const BlogBody: FC<Props> = ({ contentTitle, contentImg, contentBody }) => {
  return (
    <>
      <h1>ブログボディー</h1>
    </>
  );
};
export default BlogBody;
