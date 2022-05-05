import "./styles/custom.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            index
            path="/"
            element={<HomePage />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
