import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const LazyMainPage = lazy(() => import ('./pages/MainPage/MainPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback='Загрузка...'>
        <Routes>
          <Route path="/" element={<LazyMainPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
