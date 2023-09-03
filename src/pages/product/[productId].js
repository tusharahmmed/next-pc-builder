import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import styles from "@/styles/product/productDetails.module.css";
import Badge from "@/components/ui/badge/Badge";
import RelatedProductCard from "@/components/sections/relatedProductCard/RelatedProductCard";

const DetailsPage = ({data, relatedProducts}) => {
  const {name, price, description, img, reviews, features} = data.data;

  return (
    <section className=" ">
      <div className={`spacing-x py-8 ${styles.wraper}`}>
        <div className="p-4">
          <Image
            alt="product"
            height={400}
            width={400}
            layout="responsive"
            src={`/images${img}`}
          />
        </div>
        <div>
          <h1 className={styles.title}>{name}</h1>
          <Badge lebel={"Price:"} value={`${price}৳`} />
          <h2 className={styles.feature}>Key Features</h2>
          <ul className={styles.featureList}>
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`sm:px-0 md:px-[7%] py-8 bg-[#f2f4f8] ${styles.detailsContaier}`}>
        <div>
          <div className={styles.container}>
            <h2 className={styles.subtitle}>Description</h2>
            <p className={styles.p}>{description}</p>
          </div>
          <div className={`mt-[20px] ${styles.container}`}>
            <h2 className={styles.subtitle}>Reviews</h2>

            {reviews.map((item) => {
              return (
                <p key={item} className={styles.p}>
                  {item.message} by{" "}
                  <span className="font-bold">{item.user}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className={`px-[20px] py-[10px] ${styles.container}`}>
          <div>
            <h2 className={styles.relatedTitle}>Related Product</h2>
          </div>
          <div>
            {relatedProducts.map((item) => (
              <RelatedProductCard key={item._id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;

DetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const products = await res.json();

  const paths = products.data.map((item) => ({
    params: {productId: item._id},
  }));

  return {paths, fallback: false};
};

export const getStaticProps = async (context) => {
  const {productId} = context.params;

  // get product details
  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`);
  const data = await res.json();

  // get related products
  const relatedResponse = await fetch(
    `${process.env.BASE_URL}/products/related-products/${productId}`
  );
  const relatedProduct = await relatedResponse.json();

  return {
    props: {data, relatedProducts: relatedProduct?.data},
  };
};
