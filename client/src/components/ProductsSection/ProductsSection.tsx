import { FC } from 'react';
import Container from '../Container/Container';
import LoadingProductCardList from '../ProductCardList/LoadingProductCardList';
import ProductCardList from '../ProductCardList/ProductCardList';
import { UseHeadphonesResult } from '../../hooks/UseHeadphonesResult';
import './ProductsSection.scss';

type ProductsSectionProps = {
  title: string;
  products: UseHeadphonesResult;
}

const ProductsSection: FC<ProductsSectionProps> = ({ title, products }) => {
  const { data, isFetching, isError } = products;

  return (
    <section className='products-section'>
      <Container>
        <div className="products-section__wrapper">
          <h2 className="products-section__heading">{title}</h2>
          {isError &&
            <span className='products-section__error'>
              Произошла ошибка при загрузке данных 🙄
            </span>
          }
          {isFetching &&
            <LoadingProductCardList count={3} />
          }
          {data &&
            <ProductCardList products={data} />
          }
        </div>
      </Container>
    </section>
  )
}

export default ProductsSection;