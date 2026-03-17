// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Applications from "./pages/Applications";
// // import AddJob from "./pages/AddJob";
// import DashboardLayout from "./layouts/DashboardLayout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<DashboardLayout />}>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/applications" element={<Applications />} />
//           {/* <Route path="/add-job" element={<AddJob />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;