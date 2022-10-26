import request from "../request";

export function accountLoginRequest(username: string, password: string) {
  return request.post({
    url: "/login",
    data: { name: username, password: password },
  });
}
export function requestUserInfoById(id: number) {
  return request.get({
    url: `/users/${id}`,
  });
}
