import { FC, useEffect } from "react";
import Image from "next/image";

import { Content } from "../../types/content";

type Props = {
  body: Content[];
};
/**
 * 記事のボディ部分を表すコンポーネント.
 *
 * @params - props(記事のボディ)
 * @returns - FC
 */
const BlogBody: FC<Props> = ({ body }) => {
  return (
    <>
      {body &&
        body.map((content) => (
          <section key={content.id} className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-b-2 border-blue-500">
                <h2 className="sm:text-4xl text-3xl mb-4 font-medium">
                  {content.contentTitle}
                </h2>
              </div>
            </div>
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center text-center">
              {/* <img src="https://source.unsplash.com/weekly?food" alt="" /> */}
              <Image
                className="container object-cover object-center rounded"
                src={`https://source.unsplash.com/weekly?${content.contentImg}`}
                alt="blog-body-img"
                height="480px"
                width="600px"
              />
            </div>
            <div className="container mx-auto flex px-5 mt-10 md:flex-row flex-col items-center">
              <p>{content.contentBody}</p>
            </div>
          </section>
        ))}
    </>
  );
};
export default BlogBody;
