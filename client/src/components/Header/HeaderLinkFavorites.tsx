import HeaderLink from "./HeaderLink";
import IconFavorites from "../../assets/icons/Favorites.svg?react";

const HeaderLinkFavorites = () => {
  return (
    <HeaderLink
      to="/favorites"
      ariaLabel="Избранное"
      counter={2}
      icon={<IconFavorites aria-hidden={true}/>} />
  )
}

export default HeaderLinkFavorites;