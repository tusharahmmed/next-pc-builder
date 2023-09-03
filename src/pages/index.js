import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import ProductCard from "@/components/sections/productCard/ProductCard";

export default function Homepage({data}) {
  const limitedData = data.data.slice(0, 10);

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
          {limitedData?.map((item) => (
            <ProductCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

Homepage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-delta.vercel.app/api/v1/products"
  );
  const data = await res.json();
  return {
    props: {data},
  };
};
