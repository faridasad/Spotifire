import { FC } from "react";
import styles from "./category_card.module.scss";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    href: string;
    icons: [
      {
        height: number | null;
        width: number | null;
        url: string | null;
      }
    ];
  };
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
