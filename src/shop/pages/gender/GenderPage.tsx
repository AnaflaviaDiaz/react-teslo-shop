import { useParams } from 'react-router-dom';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { products } from '@/mocks/products.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

const getGenderLabel = (gender: string) => {
  switch (gender) {
    case 'men':
      return 'Hombres';
    case 'women':
      return 'Mujeres';

    default:
      return 'Niños';
  }
};

export const GenderPage = () => {
  const { gender } = useParams();

  const genderLabel = getGenderLabel(gender || 'men');


  return (
    <>
      <CustomJumbotron title={`Productos de ${genderLabel}`} subtitle='' />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={5} />
    </>
  );
};
