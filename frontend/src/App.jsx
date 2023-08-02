import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import { useState } from "react";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const displayData = () => {};
  const global = useGlobalContext();
  return (
    <div className="px-5 py-10 flex gap-10">
      <Sidebar setActive={setActive} active={active} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/expense" element={<Expenses />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </div>
  );
}

export default App;
