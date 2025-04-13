import { observer } from 'mobx-react-lite';
import RootStore from '../../store/RootStore';
import Button from '../Button/Button';
import './CartSummary.scss';

const CartSummary = observer(() => {
  const totalSum = RootStore.basketStore.totalSum;
  const isButtonDisabled = totalSum <= 0;

  return (
    <aside className="cart-summary">
      <div className="cart-summary__content">
        <div className="cart-summary__info">
          <span>Итого</span>
          <span>₽&nbsp;{totalSum.toLocaleString()}</span>
        </div>
        <Button disabled={isButtonDisabled} className='cart-summary__btn'>
          Перейти к оформлению
        </Button>
      </div>
    </aside>
  )
})

export default CartSummary;