import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Products from "./pages/Products/Products";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const authorized = localStorage.getItem("token");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products/:page"
            element={
              <ProtectedRoute isAuth={authorized}>
                <Products />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
