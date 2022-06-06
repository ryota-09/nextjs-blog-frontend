import { FC } from "react";
import Image from "next/image";
import BaseButton from "../atoms/Button/BaseButton";
import { useRouter } from "next/router";

type Props = {
  id: number;
  title: string;
  sumary: string;
  imgPath: string;
  createdAt: string;
  updatedAt: string;
};
/**
 * Home画面に表示される一つの記事を表すコンポーネント
 * 
 * @param - props 
 * @returns - FC
 */
const SingleArticle: FC<Props> = ({
  id,
  title,
  sumary,
  imgPath,
  createdAt,
  updatedAt = "",
}) => {
  const router = useRouter();
  return (
    <>
      <div className="sm:flex lg:items-start group h-70 bg-gray-100 p-2 rounded shadow-md">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 mt-5 ml-2">
          <Image
            className="w-full rounded-md sm:h-32 sm:w-32 object-cover"
            src={imgPath}
            alt="text"
            height="100%"
            width="100%"
          />
        </div>
        <div className="mt-5">
          <span className="text-sm text-gray-500" data-testid="date-area">
            {updatedAt === "" ? createdAt : updatedAt}
          </span>
          <p className="mt-3 text-lg font-medium leading-6">
            <a
              href="./blog-post.html"
              className="text-xl text-gray-800 hover:text-gray-500"
            >
              {title}
            </a>
          </p>
          <p className="mt-2 text leading-normal text-gray-500 w-full">{sumary}</p>
        </div>
          <div className="text-right ml-40 mb-2 mt-60">
            <BaseButton onClick={() => router.push(`/post/${id}`)}>
              続きを読む
            </BaseButton>
          </div>
      </div>
    </>
  );
};
export default SingleArticle;
