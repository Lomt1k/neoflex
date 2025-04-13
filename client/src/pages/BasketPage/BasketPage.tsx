import CartItems from "../../components/CartItems/CartItems";
import CartSummary from "../../components/CartSummary/CartSummary";
import Container from "../../components/Container/Container";
import './BasketPage.scss';

const BasketPage = () => {
  return (
    <main>
      <Container>
        <div className="basket-page">
          <CartItems />
          <CartSummary />
        </div>
      </Container>
    </main>
  )
}

export default BasketPage;