import { useContext } from "react";
import { UserContextType, userContext } from "../providers/UserProvider";

export const useUserContext = (): UserContextType => {
  return useContext(userContext);
};
