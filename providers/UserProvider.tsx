import { useReducer } from "react";
import { createContext, Dispatch, FC, ReactNode } from "react";
import { User } from "../types/user";

export type State = {
  isLogin: boolean;
  user: User;
};

export type Action = {
  type: "TOGGLE_ISLOGIN" | "SET_USER";
  payload: {
    isLogin?: boolean;
    user?: User;
  };
};

export type UserContextType = {
  userState: State;
  setUserState: Dispatch<Action>;
};

export const setUserContext = createContext({} as UserContextType);

const initialState: State = {
  isLogin: false,
  user: {
    id: 0,
    name: "",
    email: "",
    password: "",
  },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_ISLOGIN":
      return {
        isLogin: action.payload.isLogin as boolean,
        user: state.user,
      };
    case "SET_USER":
      return {
        isLogin: state.isLogin,
        user: action.payload.user as User,
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

const UserProvider: FC<Props> = ({ children }) => {
  const [userState, setUserState] = useReducer(reducer, initialState);
  return (
    <setUserContext.Provider value={{ userState, setUserState }}>
      {children}
    </setUserContext.Provider>
  );
};
export default UserProvider;
