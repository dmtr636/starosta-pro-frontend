import { domain } from "@/constants/config.ts";
import { ICategory } from "@/interfaces/ICategory.ts";
import { IWork } from "@/interfaces/IWork.ts";

export const fetchCategories = async () => {
    const response = await fetch(`${domain}/api/categories`);
    const data = (await response.json()) as { result: ICategory[] };
    return data.result;
};

export const fetchWorks = async () => {
    const response = await fetch(`${domain}/api/projects`);
    const data = (await response.json()) as { result: IWork[] };
    return data.result;
};
