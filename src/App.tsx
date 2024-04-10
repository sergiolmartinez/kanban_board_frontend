// src/App.tsx

import Navbar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
