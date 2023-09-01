import Image from "next/image";
import styles from "@/styles/componensts/addProductCard.module.css";

const AddProductCard = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles.imageWraper}>
        <Image
          src={"/images/products/processor/2.jpg"}
          height={100}
          width={100}
          alt=""
          layout="responsive"
        />
      </div>
      <div className="py-[20px] pl-[20px]">
        <h2 className={styles.title}>
          AMD Ryzen 5 4600G Processor with Radeon Graphics
        </h2>
        <ul className={styles.list}>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className={styles.actionWraper}>
        <h4>12,000৳</h4>
        <div className="w-full flex justify-center items-center">
          <button className={styles.button}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductCard;
