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
