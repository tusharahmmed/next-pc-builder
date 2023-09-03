import PcBuilderCard from "@/components/sections/pcBuilder/PcBuilderCard";
import RootLayout from "@/layouts/RootLayout";
import {LuPcCase} from "react-icons/lu";
import styles from "@/styles/pc-builder/pcBuilde.module.css";
import {useSelector} from "react-redux";
import {getDetails} from "@/utils/helpers/pcBuilder";

const PcBuilderPage = ({categories}) => {
  const pcBuilder = useSelector((state) => state.pcBuilder);

  const {productCount, totalCost} = getDetails(pcBuilder);

  return (
    <section className="px-[5%] lg:px-[10%] xl:px-[20%] py-8 bg-[#f2f4f8]">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="text-2xl text-[#f58220]">
            PC <span className="text-[#0089d0]">Tech</span>
          </h1>
          <div className="flex flex-col justify-center items-center">
            <LuPcCase color="#EF4A23" size={22} />
            <span className="text-[12px] text-[#666666] pt-[2px]">Build</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.topContent}>
            <div>
              <h2>PC Builder - Build Your Own Computer - PC Tech</h2>
            </div>
            <div className="flex justify-end">
              <div className={styles.items}>
                <span>{productCount} Items</span>
              </div>
              <div className={styles.amount}>
                <span>{totalCost}৳</span>
              </div>
            </div>
          </div>
          <div className={styles.coreComponents}>Core Components</div>
          <div>
            {categories.map((item) => (
              <PcBuilderCard key={item._id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/categories`);
  const result = await res.json();

  return {
    props: {categories: result.data},
  };
};
