import { stringify } from "querystring";
import { reducer, Action, State } from "../providers/EditorPageProvider";

describe("providers/editorPageProvider.tsx", () => {
  let initialState = {
    isUpdate: false,
    editorPage: "",
  };

  test("正常系: TOGGLE_ISUPDATEが正常に機能する。", () => {
    const updateFrag = true;
    const action: Action = {
      type: "TOGGLE_ISUPDATE",
      payload: {
        isUpdate: updateFrag,
      },
    };
    const state = reducer(initialState, action);
    expect(state.isUpdate).toEqual(true);
  });

  test("正常系: SET_EDITORPAGEが正常に機能する。", () => {
    const editorPage = "テストページ";
    const action: Action = {
      type: "SET_EDITORPAGE",
      payload: {
        editorPage: editorPage,
      },
    };
    const state = reducer(initialState, action);
    expect(state.editorPage).toBe("テストページ");
  });
});
