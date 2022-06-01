import Image from "next/image";
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
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400" data-testid="date-area">
              {updatedAt !== "" ? <span>更新日時: {updatedAt}</span> : <span>投稿日時: {createdAt}</span>}
            </p>
            <p>
              {summary}
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              src={imgPath}
              alt="blog-header-img"
              height="360px"
              width="480px"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogHeader;
