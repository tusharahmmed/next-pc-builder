import RootLayout from "@/layouts/RootLayout";
import styles from "@/styles/pc-builder/categorySelect.module.css";
import AddProductCard from "@/components/sections/addProductCard/AddProductCard";

const CategorySelect = ({data}) => {
  return (
    <section className="px-[5%] md:px-[10%] lg:px-[14%] xl:px-[18%] py-8 bg-[#f2f4f8;]">
      <div className="bg-white p-[10px] pr-[20px] shadow-[0 1px 1px rgba(0,0,0,.1)] rounded-[5px]]">
        <h1 className="text-black-900 font-bold">{"ram"?.toUpperCase()}</h1>
      </div>
      <div className={styles.productWraper}>
        {data?.map((item) => (
          <AddProductCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySelect;

CategorySelect.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const {category} = context.params;
  const url = `https://pc-builder-backend-delta.vercel.app/api/v1/products/category/${category}`;

  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {data: data.data},
  };
};
