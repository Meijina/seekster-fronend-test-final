import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ServiceDetails from "./pages/ServiceDetails";
import OrdersList from "./pages/OrdersList";
// process.env.NODE_TLS_REJECT_UNAUTHORRIZE = '0'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/service/:id" element={<ServiceDetails />}></Route>
          <Route path="/orderslist" element={<OrdersList />}></Route>
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
