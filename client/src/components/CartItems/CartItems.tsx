import { observer } from 'mobx-react-lite';
import RootStore from '../../store/RootStore';
import CartItem from './CartItem';
import './CartItems.scss';

const CartItems = observer(() => {
  const products = RootStore.basketStore.products;

  return (
    <section className="cart-items">
      <h1 className="cart-items__heading">Корзина</h1>
      <ul className="cart-items__list">
        {products.map(({ product, count }) => (
          <li key={product.id}>
            <CartItem product={product} count={count} />
          </li>
        ))}
      </ul>
    </section>
  )
})

export default CartItems;