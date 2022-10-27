import request from "../request";

// 用户注册
export function registerUser(user: any) {
  return request.post({
    url: "/register",
    data: user,
  });
}

// 用户登录
export function accountLoginRequest(username: string, password: string) {
  return request.post({
    url: "/login",
    data: { name: username, password: password },
  });
}

// 获取用户信息
export function requestUserInfoById(id: number) {
  return request.get({
    url: `/users/${id}`,
  });
}
