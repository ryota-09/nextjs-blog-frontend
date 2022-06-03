/* eslint-disable react/display-name */
import { FC, memo, ReactNode } from "react";
import Link from "next/link";

type Props = {
  menuTitle: string;
  onClick: () => void;
  children?: ReactNode;
};
/**
 * サイドバーのリストひとつぶんのコンポーネント.
 *
 * @params - props(表示する文字列, アイコン)
 * @returns - FC
 */
const Menu: FC<Props> = memo(({ menuTitle, onClick,  children }) => {
  return (
    <>
      <li>
        <div
          className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50 cursor-pointer"
          data-testid="menu-list"
          onClick={onClick}
        >
          {children ?? ""}
          <span className="ml-4">{menuTitle}</span>
        </div>
      </li>
    </>
  );
});
export default Menu;
