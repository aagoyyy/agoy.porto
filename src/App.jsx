import Home from "./pages/Home";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header/>
      <Home />
    </div>
  );
}
