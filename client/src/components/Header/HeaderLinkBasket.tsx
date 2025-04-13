import HeaderLink from "./HeaderLink";
import IconBasket from "../../assets/icons/Basket.svg?react";
import { observer } from "mobx-react-lite";
import RootStore from "../../store/RootStore";

const HeaderLinkBasket = observer(() => {
  return (
    <HeaderLink
      to="/basket"
      ariaLabel="Корзина"
      counter={RootStore.basketStore.productsCount}
      icon={<IconBasket aria-hidden={true}/>} />
  )
})

export default HeaderLinkBasket;