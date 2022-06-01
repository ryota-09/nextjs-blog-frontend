import { FC } from "react";

type Props = {
  title: string;
  summary: string;
  imgPath: string;
  createdAt: string;
  updatedAt: string;
};

const BlogHeader: FC<Props> = ({
  title,
  summary,
  imgPath,
  createdAt,
  updatedAt,
}) => {
  return <><h1>ヘッダー</h1></>;
};
export default BlogHeader;
