import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import bg from "assets/bg.jpeg";
import image from "assets/2.png";
import Button from 'components/Button/Button';
import SectionOne from 'components/main2'


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <div
          className="hero w-full relative overflow-hidden"
          style={{ height: "50vh" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute bg-primary inset-0 opacity-50" />
          <div className="container mx-auto flex items-center justify-center h-full relative z-10">
            <div>
              <h1 className="text-white font-montserrat text-hero-header font-hero-header leading-hero-header mb-[27px]">
                Get the best knowledge from our Versatile Tutors
              </h1>
              <Button textColor="black" bgColor="white">Start learning!</Button>
            </div>
            <img src={image} alt="hero-image" />
          </div>
        </div>
        <SectionOne/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
