import React from "react";
import ReactDOM from "react-dom/client";
import { LoadingProvider } from "./components/Loading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadingProvider>
      <div>aaaa</div>
    </LoadingProvider>
  </React.StrictMode>,
);
