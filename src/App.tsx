import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "~/App.css";
import { Base, Home, Order, Toppings } from "~/pages";
import { Pizza } from "~/types";
import { Header } from "~/components";

const App = () => {
  const [pizza, setPizza] = useState<Pizza>({ base: "Classic", toppings: [] });

  const handleAddBase = (base: Pizza["base"]) =>
    setPizza((prev) => ({ ...prev, base }));

  const handleToggleTopping = (topping: Pizza["toppings"][number]) =>
    setPizza((prev) => ({
      ...prev,
      toppings: prev.toppings.includes(topping)
        ? prev.toppings.filter((prevTopping) => prevTopping !== topping)
        : [...prev.toppings, topping],
    }));

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/base"
          element={<Base addBase={handleAddBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={
            <Toppings toggleTopping={handleToggleTopping} pizza={pizza} />
          }
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
      </Routes>
    </>
  );
};

export default App;
