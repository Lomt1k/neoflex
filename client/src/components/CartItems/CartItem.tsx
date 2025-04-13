import { FC } from 'react';
import { Headphones } from '../../api/Headphones';
import { memo } from 'react';
import { getActualPrice } from '../../utils/ProductHelper';
import IconMinus from '../../assets/icons/Minus.svg?react';
import IconPlus from '../../assets/icons/Plus.svg?react';
import IconRemove from '../../assets/icons/Remove.svg?react';
import CounterButton from './CounterButton';
import RootStore from '../../store/RootStore';
import './CartItem.scss';

type CartItemProps = {
  product: Headphones;
  count: number;
}

const CartItem: FC<CartItemProps> = ({ product, count }) => {
  const actualPrice = getActualPrice(product);
  const totalPrice = actualPrice * count;

  const handleRemoveClick = () => {
    RootStore.basketStore.remove(product.id);
  }

  const handleAddClick = () => {
    RootStore.basketStore.add(product);
  }

  const handleRemoveAllClick = () => {
    RootStore.basketStore.removeAll(product.id);
  }

  return (
    <div className="cart-item">
      <div className="cart-item__top">
        <img
          className="cart-item__img"
          src={product.img}
          alt={product.title}
          draggable={false}
          width={147}
          height={136}
        />
        <div className="cart-item__info">
          <span className="cart-item__title">{product.title}</span>
          <span className="cart-item__price">{actualPrice.toLocaleString()}&nbsp;₽</span>
        </div>
      </div>
      <div className="cart-item__bottom">
        <div className="cart-item__count">
          <CounterButton
            onClick={handleRemoveClick}
            icon={<IconMinus aria-hidden={true} />}
            ariaLabel='Уменьшить количество'
          />
          <span className="cart-item__count-value" aria-label='Количество товара'>{count}</span>
          <CounterButton
            onClick={handleAddClick}
            icon={<IconPlus aria-hidden={true} />}
            ariaLabel='Увеличить количество'
          />
        </div>
        <span className="cart-item__total-price" aria-label='Итоговая цена'>
          {totalPrice.toLocaleString()}&nbsp;₽
        </span>
      </div>
      <button
        className="cart-item__remove-btn"
        onClick={handleRemoveAllClick}
        aria-label='Удалить товар'
      >
        <IconRemove aria-hidden={true} />
      </button>
    </div>
  )
}

export default memo(CartItem);