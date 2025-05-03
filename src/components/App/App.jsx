import css from "./App.module.css";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestrictedRoute } from "../../guards/RestrictedRoute";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../guards/PrivateRoute";
import { AppBar } from "../AppBar/AppBar.jsx";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(
  () => import("../../pages/RegistrationPage/RegistrationPage"),
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(
  () => import("../../pages/ContactsPage/ContactsPage"),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>Refreshing user...</b>;
  }

  return (
    <div className={css.app}>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
