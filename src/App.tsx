import CharitySection from "./components/charity-section";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import ReviewSection from "./components/review-section";

function App() {
  return (
    <div className="border bg-[#F8F5F0]">
      <Header />

      <main className="py-34">
        <HeroSection />
        <section>2</section>
        <section>3</section>
        <section>4</section>
        <section>5</section>
        <ReviewSection />
        <CharitySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
