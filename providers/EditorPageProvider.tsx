import { useReducer } from "react";
import { createContext, Dispatch, FC, ReactNode } from "react";
import { Article } from "../types/article";

export type State = {
  isUpdate: boolean;
  editorPageId: number;
  previewPageData: Article;
};

export type Action = {
  type: "TOGGLE_ISUPDATE" | "SET_EDITORPAGEID" | "SET_PREVIEWPAGEDATA";
  payload: {
    isUpdate?: boolean;
    editorPageId?: number;
    previewPageData?: Article;
  };
};

export type EditorPageContextType = {
  editorPageState: State;
  setEditorPageState: Dispatch<Action>;
};

export const editorPageContext = createContext({} as EditorPageContextType);

const initialState: State = {
  isUpdate: false,
  editorPageId: 0,
  previewPageData: {
    id: 0,
    title: "",
    summary: "",
    imgPath: "",
    createdAt: "",
    updatedAt: "",
    body: [],
  },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_ISUPDATE":
      return {
        ...state,
        isUpdate: action.payload.isUpdate as boolean,
      };
    case "SET_EDITORPAGEID":
      return {
        ...state,
        editorPageId: action.payload.editorPageId as number,
      };
    case "SET_PREVIEWPAGEDATA":
      return {
        ...state,
        previewPageData: action.payload.previewPageData as Article,
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

const EditorPageProvider: FC<Props> = ({ children }) => {
  const [editorPageState, setEditorPageState] = useReducer(
    reducer,
    initialState
  );
  return (
    <editorPageContext.Provider value={{ editorPageState, setEditorPageState }}>
      {children}
    </editorPageContext.Provider>
  );
};
export default EditorPageProvider;
