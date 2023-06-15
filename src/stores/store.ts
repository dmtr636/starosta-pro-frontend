import { ICategory } from "@/interfaces/ICategory.ts";
import * as api from "@/api/api.ts";
import { IWork } from "@/interfaces/IWork.ts";
import { makeAutoObservable } from "mobx";

class Store {
    constructor() {
        makeAutoObservable(this);
    }

    works: IWork[] = [];
    categories: ICategory[] = [];
    activeCategory: ICategory | null = null;

    async fetchWorks() {
        this.works = await api.fetchWorks();
    }

    async fetchCategories() {
        this.categories = await api.fetchCategories();
    }

    setActiveCategory(activeCategory: ICategory | null) {
        this.activeCategory = activeCategory;
    }

    getWorkById(id: string) {
        return this.works.find((w) => w.id.toString() === id);
    }

    get filteredWorks() {
        if (this.activeCategory) {
            return this.works.filter((w) => w.category_id === this.activeCategory?.id);
        }
        return this.works;
    }
}

export const store = new Store();
