import { HashRouter, Route, Routes } from "react-router";

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
    <>
      <Provider store={store}>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Header url="/login" text="Log in" />}>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              element={
                <ProtectedRoute>
                  <Header />
                </ProtectedRoute>
              }
            >
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
