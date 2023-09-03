import {removeItem} from "@/app/features/pc-builder/pcBuilderSlice";
import styles from "@/styles/componensts/pcBuilderCard.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {IoMdClose} from "react-icons/io";
import {LuRefreshCw} from "react-icons/lu";
import {useDispatch, useSelector} from "react-redux";

const PcBuilderCard = ({data}) => {
  const {img, name} = data;
  const dispatch = useDispatch();
  const router = useRouter();

  // slice state
  const pcBuilder = useSelector((state) => state.pcBuilder);
  const addedData = pcBuilder[name];

  // click handle
  const handleRemoveItem = () => {
    dispatch(removeItem(addedData));
  };
  const handleReChoseItem = () => {
    router.push(`/pc-builder/${name}`);
    dispatch(removeItem(addedData));
  };

  if (pcBuilder[name] == null) {
    return (
      <div className={styles.item}>
        <div className={styles.img}>
          <Image
            alt=""
            src={img}
            height={30}
            width={30}
            //   layout="responsive"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.cat}>{name.toUpperCase()}</div>
          <div>
            <div className={styles.namePlaceholder}></div>
          </div>
        </div>
        <div className={styles.price}>
          <div>
            <div className={styles.pricePlaceholder}></div>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/pc-builder/${name}`}>
            <button className={styles.btn}>Chose</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Image
          alt=""
          src={`/images${addedData.img}`}
          height={60}
          width={60}
          //   layout="responsive"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.cat}>{name.toUpperCase()}</div>
        <div>
          <h3>{addedData.name}</h3>
        </div>
      </div>
      <div className={styles.price}>
        <div>{addedData.price}৳</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.actionIcons}>
          <IoMdClose
            onClick={handleRemoveItem}
            className={styles.icon}
            cursor={"pointer"}
            size={22}
          />
          <LuRefreshCw
            onClick={handleReChoseItem}
            className={`ml-4 ${styles.icon}`}
            cursor={"pointer"}
            size={22}
          />
        </div>
        <div className="block md:hidden mt-[5px]">${addedData.price}৳</div>
      </div>
    </div>
  );
};

export default PcBuilderCard;
