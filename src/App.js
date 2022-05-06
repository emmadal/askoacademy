import "./styles/custom.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));
const Client = lazy(() => import("./pages/Client"));
const Mentors = lazy(() => import("./pages/Mentors"));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
