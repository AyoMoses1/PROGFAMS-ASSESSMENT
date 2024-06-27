import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";
import Emails from "components/Email";
import Notepad from "components/Notepad";

const Bootcamp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Notepad />
        <Emails />
      </main>
      <Footer />
    </div>
  );
};

export default Bootcamp;
