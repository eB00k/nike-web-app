import {
  Hero,
  Footer,
  CustomerReviews,
  Services,
  Subscribe,
  SuperQuality,
  SpecailOffer,
  PopularProducts,
} from "./sections/index";
import Navbar from "./components/Navbar";
const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecailOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t scroll-pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
