// 📄 src/App.tsx
import { BrowserRouter } from "react-router-dom";
import Router from "@/router";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;