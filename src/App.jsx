import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import "./index.css";
import Body from "./components/body";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import { Spinner } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900">
        <Spinner text={"Loading..."} speed={5} />
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
