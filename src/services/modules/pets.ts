import request from "../request";

// 获取宠物列表
export function getPetsList(query?: any) {
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

// 获取宠物信息
export function getPetsInfo(id: number) {
  return request.get({
    url: `/pets/${id}`,
  });
}

// 获取宠物城市列表
export function getPetsCitys() {
  return request.get({
    url: "/pets/city/count",
  });
}

// 申请领养宠物
export function applyAdoptPet(adopt: any) {
  return request.post({
    url: "/adopt",
    data: adopt,
  });
}

// 收藏宠物
export function starsPet(petId: number) {
  return request.post({
    url: `/users/stars/${petId}`,
  });
}

// 获取宠物收藏信息
export function getStarsPetInfo(petId: number) {
  return request.get({
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

// 取消收藏宠物
export function cancelStarsPet(petId: number) {
  return request.delete({
    url: `/users/stars/${petId}`,
  });
}
