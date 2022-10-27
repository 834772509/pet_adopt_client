import request from "../request";

// 获取宠物列表
export function getPetsList(query: any) {
  return request.post({
    url: "/pets/list",
    data: query,
  });
}

// 获取宠物类别
export function getPetsCategory() {
  return request.post({
    url: "/category/list",
  });
}
