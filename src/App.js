import "./styles/custom.css";
import { Suspense, useId } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import { publicRoutes, protectedRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={useId}
            path={route.path}
            element={route.component}
            index={route.index}
          />
        ))}
        {
          protectedRoutes.map((route) => (
            <Route
              key={useId}
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>{route.component}</Suspense>
              }
            />
          ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
