import ProductsSection from "../../components/ProductsSection/ProductsSection";
import { useWiredHeadphones } from "../../hooks/useWiredHeadphones";
import { useWirelessHeadphones } from "../../hooks/useWirelessHeadphones";

const MainPage = () => {
  const wiredHeadphones = useWiredHeadphones();
  const wirelessHeadphones = useWirelessHeadphones();

  return (
    <main>
      <h1 className="visually-hidden">QPICK - магазин наушников</h1>
      <ProductsSection title="Наушники" products={wiredHeadphones} />
      <ProductsSection title="Беспроводные наушники" products={wirelessHeadphones} />
    </main>
  )
}

export default MainPage;