import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/**
 * Hier starten wir und rendern unsere Applikation innerhalb des Root-Elements
 */
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
