import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RestPassword from "./components/RestPassword";
import ForgetPassword from "./components/ForgetPassword";
import CheckBoxs from "./components/CheckBoxs";
import SideNavBar from "./components/SideNavBar";
import DashBoard from "./components/DashBoard";
import DashboardLayout from "./components/DashboardLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<RestPassword />} />
        <Route path="/checkboxs" element={<CheckBoxs />} />
        <Route path="/sidenavbar" element={<SideNavBar />} />
        <Route
          path="/dashboard"
          element={<DashboardLayout childComponent={<DashBoard />} />}
        />
      </Routes>
    </>
  );
}

export default App;
