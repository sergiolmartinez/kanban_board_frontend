// src/App.tsx

import { ThemeProvider } from "./components/theme-provider";
import AppNavbar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <AppNavbar />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
