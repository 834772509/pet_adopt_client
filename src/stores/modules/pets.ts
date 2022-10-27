import { defineStore } from "pinia";
import { getPetsCategory } from "@/services";

export const usePetsStore = defineStore("petsStore", {
  state: () => ({
    category: [] as any,
  }),
  actions: {
    async getCategory() {
      const petsCategoryResult = await getPetsCategory();
      this.category = petsCategoryResult.list;
    },
  },
});
