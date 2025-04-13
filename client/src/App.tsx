import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

const LazyNotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const LazyMainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LazyBasketPage = lazy(() => import('./pages/BasketPage/BasketPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="*" element={<LazyNotFoundPage />} />
          <Route path="/" element={<LazyMainPage />} />
          <Route path="/basket" element={<LazyBasketPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
