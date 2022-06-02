import { FC } from "react";

type Props = {
  disabled?: boolean;
  onClick: () => void;
}

/**
 * 記事のContentを追加するときのボタンコンポーネント.
 * 
 * @params - prosp(ボタンの表示名, クリックしたときのメソッド)
 * @returns - FC
 */
const AddButton: FC<Props> = ({ disabled, onClick }) => {
  return (
    <>
    <div className="addButtonArea">
        <button className="addButton" onClick={onClick}>
          +
        </button>
      </div>
    </>
  )
}
export default AddButton;
