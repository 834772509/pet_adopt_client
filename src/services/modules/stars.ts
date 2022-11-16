import request from "../request";

// 收藏宠物
export function starsPet(petId: number) {
  return request.post({
    url: `/users/stars/${petId}`,
  });
}

// 获取收藏宠物列表
export function getStarsPetList(query?: any) {
  return request.post({
    url: "/users/stars/list",
    data: query,
  });
}

// 获取宠物收藏信息
export function getStarsPetInfo(petId: number) {
  return request.get({
    url: `/users/stars/${petId}`,
  });
}

// 取消收藏宠物
export function cancelStarsPet(petId: number) {
  return request.delete({
    url: `/users/stars/${petId}`,
  });
}
