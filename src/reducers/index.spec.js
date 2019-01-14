import reducer from "./index";
import actionTypes from "../constants/actionTypes";

describe("reducers", () => {
  describe("store", () => {
    const initialState = {
      userInfo: null,
      repoData: null,
      loading: false,
      requestError: null,
    };
    const name = "userName";

    it("should provide the initial state", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should handle GET_USER_INFO_RESPONSE action", () => {
      expect(
        reducer(initialState, {
          type: actionTypes.GET_USER_INFO_RESPONSE,
          payload: { name }
        })
      ).toEqual({
        ...initialState,
        userInfo: { name }
      });
    });
  });
});
