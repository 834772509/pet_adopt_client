import request from "../request";

// 收藏宠物
export function starPet(userId: number, petId: number) {
  return request.post({
    url: `/users/stars/${userId}`,
    data: { petId },
  });
}

// 收藏列表
export function getStarList(userId: number, query?: any) {
  return request.post({
    url: `/users/stars/list/${userId}`,
    data: query,
  });
}

// 取消收藏
export function cancelStarPet(userId: number, petId: number) {
  return request.delete({
    url: `/users/stars/${userId}`,
    data: { petId },
  });
}
