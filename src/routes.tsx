import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import BurgersPage from "./pages/Main/Burgers/burgers";
import PizzasPage from "./pages/Main/Pizzas/pizzas";
import DrinksPage from "./pages/Main/Drinks/drinks";
import IceCreamsPage from "./pages/Main/IceCreams/iceCreams";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<BurgersPage />} />
        <Route path="pizzas" element={<PizzasPage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="ice-creams" element={<IceCreamsPage />} />
      </Route>
    </Routes>
  );
}
