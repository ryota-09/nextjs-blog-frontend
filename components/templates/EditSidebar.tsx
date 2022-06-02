import { FC } from "react";
import Menu from "../molecules/Menu";
/**
 * エディット画面のサイドバーを表すコンポーネント.
 *
 * @returns - FC
 */
const EditSidebar: FC = () => {
  return (
    <>
      <div className="flex overflow-hidden bg-white rounded-lg">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <a
                  href="./index.html"
                  className="px-8 text-left focus:outline-none"
                >
                  <h2 className="block p-2 text-xl font-medium tracking-tighter text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900">
                    Edit Menu
                  </h2>
                </a>
                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-white">
                  <p className="px-4 pt-4 font-medium text-gray-900 uppercase">
                    Create
                  </p>
                  <ul>
                    {/* ここにマップ関数 */}
                    <Menu menuTitle="新規作成">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Menu>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-white">
                  <p className="px-4 pt-4 font-medium text-gray-900 uppercase">
                    Update
                  </p>
                  <ul>
                    {/* ここにマップ関数 */}
                    <Menu menuTitle={`1. 記事タイトル`}></Menu>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSidebar;
