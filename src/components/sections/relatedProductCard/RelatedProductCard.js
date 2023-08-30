import styles from "@/styles/product/relatedProductCard.module.css";
import Image from "next/image";

const RelatedProductCard = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <Image
          src={"/images/products/processor/2.jpg"}
          height={100}
          width={100}
          layout="responsive"
          alt=""
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>
          Intel 10th Gen Core i3 10100F Processor
        </h2>
        <p className="font-bold text-[#e5330b]">8,200৳</p>
      </div>
    </div>
  );
};

export default RelatedProductCard;
