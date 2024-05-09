import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing/Landing";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/404/404";
import CreateMovie from "./components/CreateMovie/CreateMovie";
import EditMovie from "./components/EditMovie/EditMovie";
import Register from "./components/Register/Register";

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import AuthContextProvider from "./contexts/AuthContext";
import AlertContextProvider from "./contexts/AlertContext";
import UserContextProvider from "./contexts/UserContext";
import Admin from "./components/Admin/Admin";
import RouteGuard from "./components/RouteGuard";

function App() {
  return (
    <main>
      <AuthContextProvider>
        <AlertContextProvider>
          <UserContextProvider>
            <Navigation />
            {/* Switch statement */}
            <Routes>
              {/* Switch cases */}
              <Route path="/" element={<Landing />} />
              <Route
                path="/movie-details/:idMovie"
                element={<MovieDetails />}
              />
              <Route path="create-movie" element={<CreateMovie />} />
              <Route path="edit-movie/:id" element={
                <RouteGuard neededRole="Admin">
                  <EditMovie />
                </RouteGuard>
              } />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route
                path="admin"
                element={
                  <RouteGuard neededRole="Admin">
                    <Admin />
                  </RouteGuard>
                }
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserContextProvider>
        </AlertContextProvider>
      </AuthContextProvider>
    </main>
  );
}

export default App;
