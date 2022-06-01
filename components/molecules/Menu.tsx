/* eslint-disable react/display-name */
import { FC, memo, ReactNode } from "react";
import Link from "next/link";

type Props = {
  menuTitle: string;
  url: string;
  children?: ReactNode;
};

const Menu: FC<Props> = memo(({ menuTitle, url, children }) => {
  return (
    <>
      <li>
        <Link href={url}>
          <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50" data-testid="menu-list">
            {children ?? ""}
            <span className="ml-4">{menuTitle}</span>
          </a>
        </Link>
      </li>
    </>
  );
});
export default Menu;
