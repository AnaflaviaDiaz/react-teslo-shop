import { Outlet } from 'react-router-dom';
import { CustomHeader } from '../components/CustomHeader';
import { CustomFooter } from '../components/CustomFooter';

export const ShopLayout = () => {
  return (
    <div className='min-h-screen bg-background'>
      <CustomHeader />

      <Outlet />

      <CustomFooter />
    </div>
  );
};
