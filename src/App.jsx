import { useEffect } from "react";
import clarity from "react-microsoft-clarity";
import Home from "./pages/Home";
import Header from "./components/Header";

export default function App() {

  useEffect(() => {
    clarity.init("vsyw0z9b2i");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <Home />
    </div>
  );
}