import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <h1 className="text-primary">Home</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
