import { useContext } from "react";
import {
  editorPageContext,
  EditorPageContextType,
} from "../providers/EditorPageProvider";

export const useEditorContext = (): EditorPageContextType => {
  return useContext(editorPageContext);
};
