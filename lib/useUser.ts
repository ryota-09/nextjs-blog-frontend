import { useContext } from "react";
import { UserContextType, setUserContext } from "../providers/UserProvider";

export const useEditorContext = (): UserContextType => {
  return useContext(setUserContext);
};
