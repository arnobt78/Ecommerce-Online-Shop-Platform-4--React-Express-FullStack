/**
 * Featured products block on landing. Uses same loader data as Landing (products from featured query).
 */
import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
