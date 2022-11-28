import { defineStore } from "pinia";
import { getPetsCategory, getPetsCitys, getPetsList } from "@/services";

export const useHomeStore = defineStore("home", {
  state: () => ({
    // 全部宠物类别
    category: [] as any[],
    // 全部城市列表
    citys: [] as any[],
    // 当前城市
    currentCity: "",
    // 当前宠物类别
    currentCategory: 1,
    // 当前宠物列表数据
    petsList: [] as any[],
    // 当前宠物页
    currentPage: 0,
    // 宠物年龄
    age: [] as number[],
    // 宠物性别
    gender: -1,
    // 是否免疫
    immunity: 0,
    // 是否绝育
    desex: 0,
    // 是否驱虫
    expelling: 0,
  }),
  actions: {
    // 获取宠物类别数据
    async getPetCategory() {
      const petsCategoryResult = await getPetsCategory();
      this.category = petsCategoryResult.data.list;
    },
    // 获取所有宠物城市
    async getPetCitys() {
      const petsCityResult = await getPetsCitys();
      this.citys = petsCityResult.data.map((item: any) => {
        return item.city;
      });
    },
    // 获取宠物信息列表
    async getPetList() {
      // 请求宠物列表数据
      const res = await getPetsList({
        status: 0,
        categoryId: this.currentCategory,
        city: this.currentCity != "全市区" ? this.currentCity : "",
        age: this.age.length !== 0 ? this.age : "",
        gender: this.gender !== -1 ? this.gender : "",
        immunity: this.immunity === 1 ? this.immunity : "",
        desex: this.desex === 1 ? this.desex : "",
        expelling: this.expelling === 1 ? this.expelling : "",
        offset: this.currentPage * 10,
        size: 10,
      });

      // 保存宠物列表数据
      if (res.data.list.length > 0) {
        this.petsList.push(...res.data.list);
        this.currentPage++;
      }
    },
  },
});
