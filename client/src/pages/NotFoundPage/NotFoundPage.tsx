import ButtonLink from "../../components/Button/ButtonLink";
import Container from "../../components/Container/Container";
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <main>
      <section className="not-found-page">
        <Container>
          <div className="not-found-page__wrapper">
            <p className="not-found-page__text">
              Страница не найдена 😥
            </p>
            <ButtonLink to={'/'}>На главную</ButtonLink>
          </div>
        </Container>
      </section>

    </main>
  )
}

export default NotFoundPage;