import HeaderLink from "./HeaderLink";
import IconBasket from "../../assets/icons/Basket.svg?react";

const HeaderLinkBasket = () => {
  // TODO: Реализовать логику каунтера
  return (
    <HeaderLink
      to="/basket"
      ariaLabel="Корзина"
      counter={1}
      icon={<IconBasket aria-hidden={true}/>} />
  )
}

export default HeaderLinkBasket;