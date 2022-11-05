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
  }),
  actions: {
    async getPetCategory() {
      const petsCategoryResult = await getPetsCategory();
      this.category = petsCategoryResult.data.list;
    },
    async getPetCitys() {
      const petsCityResult = await getPetsCitys();
      this.citys = petsCityResult.data.map((item: any) => {
        return item.city;
      });
    },
    async getPetList() {
      // 请求宠物列表数据
      const res = await getPetsList({
        status: -1,
        offset: this.currentPage * 10,
        size: 10,
        city: this.currentCity != "全市区" ? this.currentCity : "",
        categoryId: this.currentCategory,
      });

      // 保存宠物列表数据
      if (res.data.list.length > 0) {
        this.petsList.push(...res.data.list);
        this.currentPage++;
      }
    },
  },
});
