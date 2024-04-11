// src/App.tsx

import AppNavbar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
