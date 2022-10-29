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
    // 宠物数据
    petsData: [] as any[],
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
      // 初始化宠物列表数据
      if (this.category.length == 0) {
        return;
      }
      if (this.petsData.length == 0) {
        this.petsData = this.category.map(() => ({
          // 宠物列表数据
          list: [],
          // 当前宠物页
          currentPage: 0,
        }));
      }

      // 请求宠物列表数据
      const res = await getPetsList({
        offset: this.petsData[this.currentCategory - 1].currentPage * 10,
        size: 10,
        city: this.currentCity != "全市区" ? this.currentCity : "",
        categoryId: this.currentCategory,
      });

      // 保存宠物列表数据
      if (res.data.list.length > 0) {
        this.petsData[this.currentCategory - 1].list.push(...res.data.list);
        this.petsData[this.currentCategory - 1].currentPage++;
      }

      // console.log([...this.petsData]);
    },
  },
});
