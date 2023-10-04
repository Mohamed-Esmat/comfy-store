import { Hero } from '../components';
import FeaturedProducts from '../components/FeaturedProducts';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  return { products };
  //we always need to return something from this function
  // return null;
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
