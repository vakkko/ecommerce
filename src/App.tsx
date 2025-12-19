import { HashRouter, Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Products from "./pages/Products/Products";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const authorized = localStorage.getItem("token");

  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute isAuth={authorized}>
                <Products />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
