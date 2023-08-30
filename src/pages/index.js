import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import CategoryCard from "@/components/sections/categoryCard/CategoryCard";
import ProductCard from "@/components/sections/productCard/ProductCard";

export default function Homepage() {
  return (
    <div className="spacing-x py-8 bg-[#f2f4f8]">
      <div className={`${styles.heroWraper}`}>
        <div className="">
          <Image
            src={"/images/hero/02-laptop-960x450.png"}
            height={500}
            width={600}
            alt=""
            layout="responsive"
          />
        </div>
        <div className="flex flex-col gap-[20px]  justify-between">
          <div>
            <Image
              src={"/images/hero/side1.png"}
              height={500}
              width={600}
              alt=""
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src={"/images/hero/side2.png"}
              height={600}
              width={600}
              alt=""
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="text-center">
          <h2 className="title">Featured Products</h2>
          <p className="subtitle">Check & Get Your Desired Product!</p>
        </div>
        <div className={styles.productWraper}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

Homepage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
