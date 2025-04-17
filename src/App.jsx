import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";
import Deshboard from "./pages/Deshboard/Deshboard";
import Loginpage from "./pages/Deshboard/Loginpage";
import Navbar from "./component/Sidebar/Navbar";
import Footer from "./component/Sidebar/footer";
import SignIn from "./pages/Deshboard/SignIn";
import Profiles from "./pages/Deshboard/Profiles";
import About from "./pages/Deshboard/About";
import Notification from "./pages/Deshboard/Notification";
import Payment from "./pages/Deshboard/Payment";
import Contact from "./pages/Deshboard/Contact"

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = {
    count,
    setCount,
  };

  return (
    <MyContext.Provider value={value}>
      <Router>
        <div className="app-container flex">
          {/* Sidebar */}
          <div className="sidebarWrapper w-[15%] bg-gray-800 text-white">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="content_Right w-[85%] bg-gray-100">
            <Navbar />
            <Routes>
              <Route path="/" element={<Deshboard />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profiles />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;