import { defineStore } from "pinia";
import { getPetsCategory, getPetsCitys, getPetsList } from "@/services";

export const useHomeStore = defineStore("home", {
  state: () => ({
    // 宠物类别
    category: [] as any,
    // 城市列表
    citys: [] as any,
    // 当前城市
    currentCity: "",
    // 宠物列表
    petsList: [] as any,
    // 当前页
    currentPage: 1,
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
      const res = await getPetsList({
        offset: (this.currentPage - 1) * 10,
        size: 10,
        city: this.currentCity != "全市区" ? this.currentCity : "",
      });
      this.petsList.push(...res.data.list);
      this.currentPage++;
    },
  },
});
