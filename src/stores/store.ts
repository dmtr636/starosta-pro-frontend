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
    activeCategoryIndex = 0;
    showCookie = JSON.parse(localStorage.getItem("showCookie") ?? "true");

    async fetchWorks() {
        this.setWorks(await api.fetchWorks());
    }

    async fetchCategories() {
        this.setCategories(await api.fetchCategories());
    }

    setWorks(works: IWork[]) {
        this.works = [...works, ...works, ...works, ...works, ...works, ...works];
    }

    setCategories(categories: ICategory[]) {
        this.categories = categories;
    }

    setActiveCategory(activeCategory: ICategory | null) {
        this.activeCategory = activeCategory;
    }

    setActiveCategoryIndex(index: number) {
        this.activeCategoryIndex = index;
    }

    getWorkById(id: string) {
        return this.works.find((w) => w.id.toString() === id);
    }

    filterWorksByCategory(category: ICategory) {
        if (category.id === 0) {
            return this.works
        }
        return this.works.filter((w) => w.category_id === category?.id);
    }

    setShowCookie(value: boolean) {
        this.showCookie = value;
        localStorage.setItem("showCookie", JSON.stringify(value));
    }

    get filteredWorks() {
        if (this.activeCategory) {
            return this.filterWorksByCategory(this.activeCategory)
        }
        return this.works;
    }

    get preparedCategories() {
        const categoryAll: ICategory = {
            id: 0,
            name: "ВСЕ"
        }
        return [
            categoryAll,
            ...this.categories
        ]
    }
}

export const store = new Store();
