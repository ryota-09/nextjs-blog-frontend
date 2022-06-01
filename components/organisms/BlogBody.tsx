import { FC } from "react";
import Image from "next/image";

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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-b-2 border-blue-500">
            <h2 className="sm:text-4xl text-3xl mb-4 font-medium">{contentTitle}</h2>
          </div>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <Image
              className="container text-center object-cover object-center rounded"
              src={contentImg}
              alt="blog-body-img"
              height="30"
              width="auto"
            />
        </div>
        <div className="container mx-auto flex px-5 mt-10 md:flex-row flex-col items-center">
          <p>{contentBody}</p>
        </div>
      </section>
    </>
  );
};
export default BlogBody;
