"use client";
import { FC } from "react";
import styles from "./search_categories.module.scss";
import { Categories } from "@/app/types/Categories";
import CategoryCard from "../CategoryCard";

interface SearchCategoriesProps {
  categories: Categories;
}

const SearchCategories: FC<SearchCategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.head_text}>
        <h2>Browse all</h2>
      </div>
      <div className={styles.category_grid}>
        {categories.map((c) => {
          return <CategoryCard category={c} key={c.id} />;
        })}
      </div>
    </div>
  );
};

export default SearchCategories;
