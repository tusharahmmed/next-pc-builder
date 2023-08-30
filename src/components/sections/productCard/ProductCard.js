import styles from "@/styles/componensts/productCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href={"/product/1"}>
      <div className={styles.item}>
        <div className={styles.img}>
          <Image
            alt="name"
            width={200}
            height={200}
            layout="responsive"
            src={"/images/products/monitor/1.webp"}
          />
        </div>
        <div className={styles.details}>
          <h4>
            MSI G2412 23.8 FHD 170Hz IPS 1ms FreeSync Premium Gaming Monitor
          </h4>
          <p>23,800৳</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
