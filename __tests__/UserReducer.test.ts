import { reducer, Action, State } from "../providers/UserProvider";

describe("providers/UserProvider.tsx", () => {
  let initialState = {
    isLogin: false,
    user: {
      id: 0,
      name: "",
      email: "",
      password: "",
    },
  };

  test("正常系: TOGGLE_ISLOGINが正常に機能する。", () => {
    const isLoginFrag = true;
    const action: Action = {
      type: "TOGGLE_ISLOGIN",
      payload: {
        isLogin: isLoginFrag,
      },
    };
    const state = reducer(initialState, action);
    expect(state.isLogin).toEqual(true);
  });

  test("正常系: SET_USERが正常に機能する。", () => {
    const user = {
      id: 1,
      name: "テストname",
      email: "テストemail",
      password: "テストpassword",
    };
    const action: Action = {
      type: "SET_USER",
      payload: {
        user: user,
      },
    };
    const state = reducer(initialState, action);
    expect(state.user).toEqual(user);
  });
});
