import Image from "next/image";
import styles from "@/styles/componensts/addProductCard.module.css";
import Link from "next/link";

const AddProductCard = ({data}) => {
  const {img, name, features, price, _id} = data;

  return (
    <div className={styles.wraper}>
      <div className={styles.imageWraper}>
        <Image
          src={`/images${img}`}
          height={100}
          width={100}
          alt=""
          layout="responsive"
        />
      </div>
      <div className="py-[20px] pl-[20px]">
        <h2 className={styles.title}>
          <Link href={`/product/${_id}`}>{name} </Link>
        </h2>

        <ul className={styles.list}>
          {features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.actionWraper}>
        <h4>{price}৳</h4>
        <div className="w-full flex justify-center items-center">
          <button className={styles.button}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductCard;
