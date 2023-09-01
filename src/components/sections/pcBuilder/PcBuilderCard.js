import styles from "@/styles/componensts/pcBuilderCard.module.css";
import Image from "next/image";
import Link from "next/link";
import {IoMdClose} from "react-icons/io";
import {LuRefreshCw} from "react-icons/lu";

const PcBuilderCard = (props) => {
  if (props.id == 1) {
    return (
      <div className={styles.item}>
        <div className={styles.img}>
          <Image
            alt=""
            src={"/images/products/processor/2.jpg"}
            height={60}
            width={60}
            //   layout="responsive"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.cat}>CPU</div>
          <div>
            <h3>
              AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3
              Graphics
            </h3>
          </div>
        </div>
        <div className={styles.price}>
          <div>7,000৳</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actionIcons}>
            <IoMdClose className={styles.icon} cursor={"pointer"} size={22} />
            <LuRefreshCw
              className={`ml-4 ${styles.icon}`}
              cursor={"pointer"}
              size={22}
            />
          </div>
          <div className="block md:hidden mt-[5px]">7,000৳</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Image
          alt=""
          src={"/images/categroies/cpu.svg"}
          height={30}
          width={30}
          //   layout="responsive"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.cat}>CPU</div>
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
        <Link href={"/pc-builder/motherboard"}>
          <button className={styles.btn}>Chose</button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderCard;
