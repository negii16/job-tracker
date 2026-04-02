import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import DashboardLayout from "./layouts/DashboardLayout";
import AddJob from "./pages/AddJob";
import Interviews from "./pages/Interviews";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path='interviews' element={<Interviews/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
