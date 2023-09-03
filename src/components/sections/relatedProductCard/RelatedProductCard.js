import styles from "@/styles/product/relatedProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

const RelatedProductCard = ({data}) => {
  const {img, _id, name, price} = data;
  return (
    <div className={styles.container}>
      <div className="">
        <Image
          src={`/images${img}`}
          height={100}
          width={100}
          layout="responsive"
          alt=""
        />
      </div>
      <div className={styles.details}>
        <Link href={`/product/${_id}`}>
          <h2 className={styles.title}>${name}</h2>
        </Link>
        <p className="font-bold text-[#e5330b]">{price}৳</p>
      </div>
    </div>
  );
};

export default RelatedProductCard;
