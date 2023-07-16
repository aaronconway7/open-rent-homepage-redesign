import Hero from "./components/Hero";
import PropertyGrid from "./components/PropertyGrid";
import PropertySearch from "./components/PropertySearch";
import Mentions from "./components/Mentions";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Landlords from "./components/Landlords";
import Tenants from "./components/Tenants";
import Callout from "./components/Callout";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PropertySearch />
      <Landlords />
      <Callout />
      <Tenants />
      <PropertyGrid />
      <Mentions />
      <Footer />
    </>
  );
}

export default App;
