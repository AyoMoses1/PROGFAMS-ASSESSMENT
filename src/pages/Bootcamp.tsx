import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

const Bootcamp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <h1 className="text-primary">Bootcamp</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Bootcamp;
