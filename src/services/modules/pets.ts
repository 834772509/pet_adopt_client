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

// 获取宠物信息-通过id
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

// 提交送养宠物信息
export function publishPet(petInfo: any) {
  return request.post({
    url: "/pets",
    data: petInfo,
  });
}

// 申请领养宠物
export function applyAdoptPet(adopt: any) {
  return request.post({
    url: "/adopt",
    data: adopt,
  });
}

// 获取领养宠物列表
export function getApplyAdoptList(query?: any) {
  return request.post({
    url: "/adopt/apply/list",
    data: query,
  });
}

// 通过领养申请
export function agreeAdoptAppayPet(id: number) {
  return request.post({
    url: `/adopt/${id}`,
    data: {
      state: 1,
    },
  });
}
