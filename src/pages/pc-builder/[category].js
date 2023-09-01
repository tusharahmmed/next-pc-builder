import ProductCard from "@/components/sections/productCard/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import {useRouter} from "next/router";
import styles from "@/styles/pc-builder/categorySelect.module.css";
import AddProductCard from "@/components/sections/addProductCard/AddProductCard";

const CategorySelect = () => {
  const router = useRouter();
  const {category} = router.query;

  return (
    <section className="px-[5%] md:px-[10%] lg:px-[14%] xl:px-[18%] py-8 bg-[#f2f4f8;]">
      <div className="bg-white p-[10px] pr-[20px] shadow-[0 1px 1px rgba(0,0,0,.1)] rounded-[5px]]">
        <h1 className="text-black-900 font-bold">{category?.toUpperCase()}</h1>
      </div>
      <div className={styles.productWraper}>
        <AddProductCard />
        <AddProductCard />
        <AddProductCard />
        <AddProductCard />
        <AddProductCard />
        <AddProductCard />
      </div>
    </section>
  );
};

export default CategorySelect;

CategorySelect.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
