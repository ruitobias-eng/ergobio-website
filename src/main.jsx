import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./components/LanguageContext"; // ← Importe o LanguageProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider> {/* ← Adicione o LanguageProvider aqui */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
);x 