import { FC } from 'react';
import { Headphones } from '../../api/Headphones';
import './ProductCardList.scss';
import ProductCard from '../ProductCard/ProductCard';

type ProductCardListProps = {
  products: Headphones[];
}

const ProductCardList: FC<ProductCardListProps> = ({ products }) => {
  return (
    <ul className="product-card-list">
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}

export default ProductCardList;