import {
  getUserInfoResponse,
  getUserInfoRequest,
  getUserRepoRequest,
  getUserRepoResponse
} from "./index";
import actionTypes from "../constants/actionTypes";

describe("actions", () => {
  const name = "userName";
  it("getUserInfoRequest should create GET_USER_INFO_REQUEST action", () => {
    expect(getUserInfoRequest(name)).toEqual({
      type: actionTypes.GET_USER_INFO_REQUEST,
      payload: name
    });
  });
  it("getUserInfoResponse should create GET_USER_INFO_RESPONSE action", () => {
    expect(getUserInfoResponse({ name })).toEqual({
      type: actionTypes.GET_USER_INFO_RESPONSE,
      payload: { name }
    });
  });

  it("getUserRepoRequest should create GET_USER_REPO_REQUEST action", () => {
    expect(getUserRepoRequest({ name })).toEqual({
      type: actionTypes.GET_USER_REPO_REQUEST,
      payload: { name }
    });
  });
  it("getUserRepoResponse should create GET_USER_REPO_RESPONSE action", () => {
    expect(getUserRepoResponse({ name: "userName" })).toEqual({
      type: actionTypes.GET_USER_REPO_RESPONSE,
      payload: { name }
    });
  });
});
