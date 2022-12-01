import request from "../request";

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

// 获取领养宠物列表-通过id
export function getApplyAdoptDetailById(id: number) {
  return request.get({
    url: `/adopt/${id}`,
  });
}

// 通过领养申请
export function agreeAdoptAppayPet(id: number) {
  return request.patch({
    url: `/adopt/${id}`,
    data: {
      state: 1,
    },
  });
}

// 删除领养申请
export function removeApplyAdopt(id: number) {
  return request.delete({
    url: `/adopt/${id}`,
  });
}
