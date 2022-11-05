// 格式化年龄文本
export function formatAge(age: any) {
  if (age == null) {
    return "年龄不详";
  }
  if (age >= 12) {
    return `${(age / 12).toFixed(0)}岁`;
  } else {
    return `${age}个月`;
  }
}

// 获取静态资源图片
export function getAssetsImage(name: string) {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href;
}
