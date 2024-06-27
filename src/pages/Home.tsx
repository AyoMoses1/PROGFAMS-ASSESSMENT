import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import SectionOne from 'components/main2'
import Testimonials from 'components/Testimonials'
import Email from 'components/Email'


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <SectionOne/>
        <Testimonials/>
        <Email/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
