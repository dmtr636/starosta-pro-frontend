import { create } from "zustand";
import { ICategory } from "@/interfaces/ICategory.ts";
import { fetchCategories, fetchWorks } from "@/api/api.ts";
import { IWork } from "@/interfaces/IWork.ts";
import { createSelectors } from "@/helpers/createSelectors.ts";

type State = {
    works: IWork[];
    categories: ICategory[];
    activeCategory: ICategory | null;
};

type Actions = {
    fetchWorks: () => Promise<void>;
    fetchCategories: () => Promise<void>;
    setActiveCategory: (category: ICategory | null) => void;
};

const useStoreBase = create<State & Actions>()((set) => ({
    works: [],
    categories: [],
    activeCategory: null,

    fetchWorks: async () => {
        const works = await fetchWorks();
        set(() => ({ works }));
    },

    fetchCategories: async () => {
        const categories = await fetchCategories();
        set(() => ({ categories }));
    },

    setActiveCategory: (activeCategory) => set(() => ({ activeCategory })),
}));

export const store = createSelectors(useStoreBase);
