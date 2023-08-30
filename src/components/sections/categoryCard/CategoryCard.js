import Image from "next/image";
import styles from "@/styles/componensts/categoryCard.module.css";

const CategoryCard = ({data}) => {
  return (
    <div className={styles.card}>
      <Image
        src={data?.img}
        height={500}
        width={600}
        alt=""
        layout="responsive"
      />
      <div>
        <p>{data?.title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
