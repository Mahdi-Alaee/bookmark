import ExtentionSection from "./components/ExtentionSection/ExtentionSection";
import FAQSection from "./components/FAQSection/FAQSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ExtentionSection />
      <FAQSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
