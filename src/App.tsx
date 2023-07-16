import Hero from "./components/Hero";
import PropertyGrid from "./components/PropertyGrid";
import PropertySearch from "./components/PropertySearch";
import Mentions from "./components/Mentions";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PropertySearch />
      <PropertyGrid />
      <Mentions />
      <Footer />
    </>
  );
}

export default App;
