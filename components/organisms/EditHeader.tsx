/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import useSWR from "swr";
import { Article } from "../../types/article";

type Props = {
  isUpdate: boolean;
  headerTitle: string;
  headerSummary: string;
  headerImg: string;
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setHeaderSummary: Dispatch<SetStateAction<string>>;
};

const axiosFetcher = async () => {
  const response = await axios.get<Article>(
    "https://demo8969917.mockable.io/personal-media/23"
  );
  return response.data;
};

/**
 * 編集画面のヘッダー部分のコンポーネント.
 *
 * @params - props(タイトル, 画像, あらすじをセットする更新関数)
 * @returns - FC
 */
const EditHeader: FC<Props> = ({
  isUpdate,
  headerTitle,
  headerSummary,
  headerImg,
  setHeaderTitle,
  setHeaderImg,
  setHeaderSummary,
}) => {

  return (
    <>
      <div>
        <section>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h3 className="text-xl font-bold">Article Title</h3>
                <input
                  type="text"
                  placeholder="タイトル"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={headerTitle}
                  onChange={(e) => setHeaderTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h3 className="text-xl font-bold">Thumbnail</h3>
                <p>※ アルファベットで入力 &nbsp;&nbsp;&nbsp;例: apple</p>
                <input
                  type="text"
                  placeholder="Image"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={headerImg}
                  onChange={(e) => setHeaderImg(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue border-b-2 pb-20 border-blue-200">
              <div className="w-full mx-auto">
                <h3 className="text-xl font-bold">Summary</h3>
                <textarea
                  placeholder="内容"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={headerSummary}
                  onChange={(e) => setHeaderSummary(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default EditHeader;
