import { Layout } from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreching } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreching);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Please, wait, loading info...</div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo={"/contacts"}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo={"/contacts"}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;