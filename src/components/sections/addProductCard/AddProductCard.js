import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {addItem} from "@/app/features/pc-builder/pcBuilderSlice";
import styles from "@/styles/componensts/addProductCard.module.css";

const AddProductCard = ({data}) => {
  const {img, name, features, price, _id, category} = data;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddItem = () => {
    const item = {img, name, category, price};

    dispatch(addItem(item));
    router.push("/pc-builder");
  };

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
          <button onClick={handleAddItem} className={styles.button}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductCard;
