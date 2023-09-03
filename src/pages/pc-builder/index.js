import PcBuilderCard from "@/components/sections/pcBuilder/PcBuilderCard";
import RootLayout from "@/layouts/RootLayout";
import {LuPcCase} from "react-icons/lu";
import styles from "@/styles/pc-builder/pcBuilde.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getDetails} from "@/utils/helpers/pcBuilder";
import swal from "sweetalert";
import {reset} from "@/app/features/pc-builder/pcBuilderSlice";

const PcBuilderPage = ({categories}) => {
  const dispatch = useDispatch();
  const pcBuilder = useSelector((state) => state.pcBuilder);

  const {productCount, totalCost} = getDetails(pcBuilder);

  const handlePcBuild = () => {
    if (productCount > 6) {
      dispatch(reset());
      swal("You have successfully build your pc", {
        title: "Complete!",
        icon: "success",
        button: false,
        timer: 3000,
      });
    }
  };

  return (
    <section className="px-[5%] lg:px-[10%] xl:px-[20%] py-8 bg-[#f2f4f8]">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="text-2xl text-[#f58220]">
            PC <span className="text-[#0089d0]">Tech</span>
          </h1>
          <div
            onClick={handlePcBuild}
            className={`flex flex-col justify-center items-center ${
              productCount == 7 ? "cursor-pointer" : "cursor-not-allowed"
            }`}>
            <LuPcCase
              color={productCount == 7 ? "#EF4A23" : "#666666"}
              size={22}
            />
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
  const res = await fetch(
    `https://pc-builder-backend-delta.vercel.app/api/v1/categories`
  );
  const result = await res.json();

  return {
    props: {categories: result.data},
  };
};
