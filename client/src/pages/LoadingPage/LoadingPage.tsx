import Loader from '../../components/Loader/Loader';
import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <main>
      <div className='loading-page'>
        <Loader />
      </div>
    </main>
  )
}

export default LoadingPage;