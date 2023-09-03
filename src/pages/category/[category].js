import ProductCard from "@/components/sections/productCard/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import styles from "@/styles/category/productCategory.module.css";

const CategoryProducts = ({data}) => {
  return (
    <section className="spacing-x py-8 bg-[#f2f4f8;]">
      <div className="bg-white p-[10px] pr-[20px] shadow-[0 1px 1px rgba(0,0,0,.1)] rounded-[5px]]">
        <h1 className="text-black-900 font-bold">
          {data?.data[0]?.category?.toUpperCase()}
        </h1>
      </div>
      <div className={`${styles.productWraper}`}>
        {data?.data?.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/categories`);
  const categories = await res.json();

  const paths = categories.data.map((item) => ({
    params: {category: item.name},
  }));

  return {paths, fallback: false};
};

export const getStaticProps = async (context) => {
  const {category} = context.params;

  const url = `${process.env.BASE_URL}/products/category/${category}`;

  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {data},
  };
};
