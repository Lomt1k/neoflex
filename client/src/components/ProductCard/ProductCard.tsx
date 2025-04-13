import { FC, memo, useCallback } from 'react';
import { Headphones } from '../../api/Headphones';
import IconRating from '../../assets/icons/Rating.svg?react';
import TextButton from '../TextButton/TextButton';
import RootStore from '../../store/RootStore';
import { getActualPrice } from '../../utils/ProductHelper';
import './ProductCard.scss';

type ProductCardProps = {
  product: Headphones;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleClick = useCallback(() => {
    RootStore.basketStore.add(product);
  }, [product]);

  return (
    <div className="product-card">
      <img className="product-card__img"
        height={237}
        src={product.img}
        alt={product.title}
        draggable={false}
      />
      <div className="product-card__info">
        <span className="product-card__title">{product.title}</span>
        <div className="product-card__price">
          <span className="product-card__price-new">
            {getActualPrice(product)}&nbsp;₽
          </span>
          {product.discount &&
            <span className="product-card__price-old">
              {product.price}&nbsp;₽
            </span>
          }
        </div>
      </div>
      <div className="product-card__bottom">
        <div className="product-card__rating">
          <IconRating className='product-card__rating-icon' aria-hidden={true} />
          <span className="product-card__rating-value">{product.rate}</span>
        </div>
        <TextButton onClick={handleClick}>Купить</TextButton>
      </div>
    </div>
  )
}

export default memo(ProductCard);