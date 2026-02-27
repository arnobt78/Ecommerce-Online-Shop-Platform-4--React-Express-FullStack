/**
 * Landing page: Hero + FeaturedProducts. Loader prefetches featured products via TanStack Query.
 */
import { FeaturedProducts, Hero } from '../components';

import { customFetch } from '../utils';
const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

// ensureQueryData: fetch if missing, otherwise use cache; loader passes products to route
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
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
