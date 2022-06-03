import { useReducer } from "react";
import { createContext, Dispatch, FC, ReactNode } from "react";

export type State = {
  isUpdate: boolean;
  editorPageId: number;
};

export type Action = {
  type: "TOGGLE_ISUPDATE" | "SET_EDITORPAGEID";
  payload: {
    isUpdate?: boolean;
    editorPageId?: number;
  };
};

export type EditorPageContextType = {
  editorPageState: State;
  setUsereditorPageState: Dispatch<Action>;
};

export const editorPageContext = createContext({} as EditorPageContextType);

const initialState: State = {
  isUpdate: false,
  editorPageId: 0,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_ISUPDATE":
      return {
        isUpdate: action.payload.isUpdate as boolean,
        editorPageId: state.editorPageId,
      };
    case "SET_EDITORPAGEID":
      return {
        isUpdate: state.isUpdate,
        editorPageId: action.payload.editorPageId as number,
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

const EditorPageProvider: FC<Props> = ({ children }) => {
  const [editorPageState, setUsereditorPageState] = useReducer(
    reducer,
    initialState
  );
  return (
    <editorPageContext.Provider
      value={{ editorPageState, setUsereditorPageState }}
    >
      {children}
    </editorPageContext.Provider>
  );
};
export default EditorPageProvider;
