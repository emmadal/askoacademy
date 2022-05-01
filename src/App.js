import "./styles/custom.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
