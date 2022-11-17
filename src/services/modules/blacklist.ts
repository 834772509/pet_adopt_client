import request from "../request";

// 获取失信名单列表
export function getBlackList(query?: any) {
  return request.post({
    url: "/blacklist/list",
    data: query,
  });
}

// 获取失信人信息-通过id
export function getBlackInfo(id: number) {
  return request.get({
    url: `/blacklist/${id}`,
  });
}
