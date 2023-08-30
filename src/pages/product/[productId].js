import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import {useRouter} from "next/router";
import styles from "@/styles/product/productDetails.module.css";
import Badge from "@/components/ui/badge/Badge";
import RelatedProductCard from "@/components/sections/relatedProductCard/RelatedProductCard";

const DetailsPage = () => {
  const router = useRouter();
  const {productId} = router.query;

  return (
    <section className=" ">
      <div className={`spacing-x py-8 ${styles.wraper}`}>
        <div className="p-4">
          <Image
            alt="product"
            height={400}
            width={400}
            layout="responsive"
            src={"/images/products/processor/1.jpg"}
          />
        </div>
        <div>
          <h1 className={styles.title}>
            AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3
            Graphics
          </h1>
          <Badge lebel={"Price:"} value={"7,000৳"} />
          <h2 className={styles.feature}>Key Features</h2>
          <ul className={styles.featureList}>
            <li>Model: Athlon 200GE</li>
            <li>Base Clock Speed 3.2GHz</li>
            <li>Package AM4</li>
            <li>PCI Express PCIe 3.0</li>
          </ul>
        </div>
      </div>
      <div
        className={`sm:px-0 md:px-[7%] py-8 bg-[#f2f4f8] ${styles.detailsContaier}`}>
        <div>
          <div className={styles.container}>
            <h2 className={styles.subtitle}>Description</h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quo
              dolorem cupiditate pariatur dignissimos, voluptatum, saepe ipsum
              repudiandae alias delectus inventore illo at corrupti omnis
              voluptas velit recusandae, numquam exercitationem? Repudiandae
              minima ducimus possimus illo natus vero nesciunt voluptatem
              mollitia praesentium iste asperiores excepturi laboriosam maiores
              tempore, libero quidem fugit consequuntur nihil tenetur
              accusantium deleniti autem. Alias ipsam ad tempora quod deleniti,
              distinctio fugit rem porro maxime. Similique tempore voluptatum ad
              voluptate totam temporibus, impedit quibusdam esse minus.
            </p>
          </div>
          <div className={`mt-[20px] ${styles.container}`}>
            <h2 className={styles.subtitle}>Reviews</h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              quo. by <span className="font-bold">Tushar Ahmmed</span>
            </p>
          </div>
        </div>
        <div className={`px-[20px] py-[10px] ${styles.container}`}>
          <div>
            <h2 className={styles.relatedTitle}>Related Product</h2>
          </div>
          <div>
            <RelatedProductCard />
            <RelatedProductCard />
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
