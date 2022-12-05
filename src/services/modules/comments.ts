import request from "../request";

// 创建评论
export function createComment(petId: number, content: string) {
  return request.post({
    url: `/comments`,
    data: {
      petId,
      content,
    },
  });
}

// 获取宠物评论列表
export function getCommentList(petId: number, query?: any) {
  return request.post({
    url: `/comments/list/${petId}`,
    data: query,
  });
}

// 删除评论
export function removeComment(commentId: number) {
  return request.delete({
    url: `/comments/${commentId}`,
  });
}
