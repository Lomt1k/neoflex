import { FC, ReactElement } from 'react';
import './ProductCardList.scss';

type LoadingProductCardListProps = {
  count: number;
}

const LoadingProductCardList: FC<LoadingProductCardListProps> = ({ count }) => {
  const items: ReactElement[] = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <li key={i}>
        <div style={{ 
          backgroundColor: "var(--color-white-10)",
          height: 407,
          borderRadius: 30,
         }} />
      </li>
    )
  }

  return (
    <ul className="product-card-list">
      {items}
    </ul>
  )
}

export default LoadingProductCardList;