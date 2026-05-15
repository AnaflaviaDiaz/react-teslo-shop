import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminProductsPage = () => {
  return (
    <>
    <div className='flex justify-between items-center'>

      <AdminTitle
        title='Productos'
        subtitle='Aquí puedes ver y administrar tus productos'
      />

      <Link to={'/admin/products/new'}>
        <Button>
          <PlusIcon />
          Nuevo producto
        </Button>
      </Link>
    </div>

      <Table className='bg-white p-10 shadow-xs'>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className='text-right'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>
              <img
                src='https://placehold.co/250x250'
                alt='Product'
                className='w-20 h-20 object-cover'
              />
            </TableCell>
            <TableCell>Product 1</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Categoría 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS, S, L</TableCell>
            <TableCell>
              <Link to={'/admin/products/t-shirt-teslo'}>Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <CustomPagination totalPages={5} />
    </>
  );
};
