import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import TabBar from "./components/TabBar";
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Router />
        <TabBar />
      </div>
    </BrowserRouter>
  );
};

export default App;