import { useWiredHeadphones } from '../../hooks/useWiredHeadphones';
import Container from '../Container/Container';
import LoadingProductCardList from '../ProductCardList/LoadingProductCardList';
import ProductCardList from '../ProductCardList/ProductCardList';
import './WiredSection.scss';

const WiredSection = () => {
  const { headphones, isFetching, isError } = useWiredHeadphones();

  return (
    <section className='wired-section'>
      <Container>
        <div className="wired-section__wrapper">
          <h2 className="wired-section__heading">Наушники</h2>
          {isError &&
            <span className='wired-section__error'>
              Произошла ошибка при загрузке данных 🙄
            </span>
          }
          {isFetching &&
            <LoadingProductCardList count={3} />
          }
          {headphones &&
            <ProductCardList products={headphones} />
          }
        </div>
      </Container>
    </section>
  )
}

export default WiredSection;