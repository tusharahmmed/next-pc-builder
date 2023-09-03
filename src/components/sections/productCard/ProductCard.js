import styles from "@/styles/componensts/productCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({data}) => {
  return (
    <Link href={`/product/${data?._id}`}>
      <div className={styles.item}>
        <div className={styles.img}>
          <Image
            alt="name"
            width={200}
            height={150}
            // layout="responsive"
            src={`/images${data.img}`}
          />
        </div>
        <div className={styles.details}>
          <h4>{data?.name}</h4>
          <p>{data?.price}৳</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
