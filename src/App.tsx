import { HashRouter, Navigate, Route, Routes } from "react-router";

import { store } from "./store/store";
import { Provider } from "react-redux";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";

function App() {
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
              <ProtectedRoute>
                <Header />
              </ProtectedRoute>
            }
          >
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
