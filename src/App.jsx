import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import "./index.css";
import Body from "./components/body";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900">
        <HashLoader color={"#3B82F6"} loading={isLoading} size={150} />
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:text-white">
        <Header />
        <div className="MainContent flex-1 overflow-y-scroll py-2 mx-2">
          <Body />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
