/* eslint-disable react/display-name */
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
/**
 * ボタンのコンポーネント.
 * @params - props
 * @returns - FC
 */
const BaseButton: FC<Props> = memo(
  ({ children, disabled = false, onClick }) => {
    return (
      <>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </>
    );
  }
);
export default BaseButton;
