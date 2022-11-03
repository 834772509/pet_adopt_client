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
