import { FC, useCallback } from 'react';
import { Headphones } from '../../api/Headphones';
import IconRating from '../../assets/icons/Rating.svg?react';
import TextButton from '../TextButton/TextButton';
import './ProductCard.scss';

type ProductCardProps = {
  product: Headphones;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleClick = useCallback(() => {
    // TODO: Add to basket
  }, [product]);

  const currentPrice = product.discount
    ? product.price * (1 - product.discount)
    : product.price;

  return (
    <div className="product-card">
      <img className="product-card__img"
        height={237}
        src={product.img}
        alt={product.title}
      />
      <div className="product-card__info">
        <span className="product-card__title">{product.title}</span>
        <div className="product-card__price">
          <span className="product-card__price-new">{currentPrice}&nbsp;₽</span>
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

export default ProductCard;