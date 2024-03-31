import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Population } from "./pages/Population";
import { Cryptocurrency } from "./pages/Cryptocurrency";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Population />} />
          <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
