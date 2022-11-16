import request from "../request";

// 上传图片（支持多张）
export function uploadPicture(file: File | File[]) {
  const bodyFormData = new FormData();

  if (file instanceof Array) {
    file.map((item) => bodyFormData.append("picture", item));
  } else {
    bodyFormData.append("picture", file);
  }

  return request.post({
    url: "/upload/picture",
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8",
    },
  });
}
