import { FC } from "react";
import styles from "./category_card.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/app/types/Category";

interface CategoryCardProps {
  category: Category
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link draggable="false" className={styles.card} href={category.href}>
      <div className={styles.wrapper}>
        <span className={styles.name}>{category.name}</span>
        <div className={styles.image_con}>
          <span>
            <Image src={category.icons[0].url || ""} fill alt="" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
