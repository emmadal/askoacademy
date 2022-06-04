import "./styles/custom.css";
import React, {
  useId,
  useEffect,
  useCallback,
  useState,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { publicRoutes, protectedRoutes } from "./routes";

export const UserAuth = React.createContext(null);

function App() {
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState(null);

  const onAuthChanged = useCallback(() => {
    const res = localStorage.getItem("askoToken");
    setUserToken(res);
  }, []);

  useEffect(() => onAuthChanged, [onAuthChanged]);

  return (
    <UserAuth.Provider value={{ user, setUser }}>
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
          {userToken &&
            protectedRoutes.map((route) => (
              <Route key={useId} path={route.path} element={route.component} />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserAuth.Provider>
  );
}

export default App;
