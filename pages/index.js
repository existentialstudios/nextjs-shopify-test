import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { client } from "../utils/shopifyStore";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <FeaturedProducts products={props.products} />
    </div>
  );
}

export const getStaticProps = async (context) => {

  // Fetch products
  const products = await client.product.fetchAll();

  // Fetch shop Info if you think about SEO and title and ... to your page
  const infos = await client.shop.fetchInfo();

  // fetch shop policy if you have any
  const policies = await client.shop.fetchPolicies();

  return {
    props: {
      infos: JSON.parse(JSON.stringify(infos)),
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};