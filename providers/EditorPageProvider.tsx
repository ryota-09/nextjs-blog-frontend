import { useReducer } from "react";
import { createContext, Dispatch, FC, ReactNode } from "react";

export type State = {
  isUpdate: boolean;
  editorPage: string;
};

export type Action = {
  type: "TOGGLE_ISUPDATE" | "SET_EDITORPAGE";
  payload: {
    isUpdate?: boolean;
    editorPage?: string;
  };
};

export type EditorPageContextType = {
  editorPageState: State;
  setUsereditorPageState: Dispatch<Action>;
};

export const editorPageContext = createContext({} as EditorPageContextType);

const initialState: State = {
  isUpdate: true,
  editorPage: "",
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_ISUPDATE":
      return {
        isUpdate: action.payload.isUpdate as boolean,
        editorPage: state.editorPage,
      };
    case "SET_EDITORPAGE":
      return {
        isUpdate: state.isUpdate,
        editorPage: action.payload.editorPage as string,
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
