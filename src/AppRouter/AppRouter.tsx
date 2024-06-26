import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Bootcamp from "../pages/Bootcamp";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bootcamp" element={<Bootcamp />} />
    </Routes>
  );
};

export default AppRouter;
