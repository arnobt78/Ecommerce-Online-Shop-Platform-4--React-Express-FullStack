/**
 * Shared layout for /, /products, /cart, etc.: Header, Navbar, and Outlet.
 * Shows full-screen Loading when a child route is loading (loader running).
 */
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
