/* eslint-disable react/display-name */
import { FC, memo, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
/**
 * DELETEボタンのコンポーネント.
 * @params - props
 * @returns - FC
 */
const DeleteButton: FC<Props> = memo(
  ({ children, disabled = false, onClick }) => {
    return (
      <>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          data-testid="deletebutton"
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </>
    );
  }
);
export default DeleteButton;
