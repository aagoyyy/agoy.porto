import { useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

export default function App() {

  useEffect(() => {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vsyw0z9b2i");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <Home />
    </div>
  );
}