import { defineStore } from "pinia";
import { getPetsCategory, getPetsCitys } from "@/services";

export const useHomeStore = defineStore("home", {
  state: () => ({
    category: [] as any,
    citys: [] as any,
    currentCity: "",
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
  },
});
