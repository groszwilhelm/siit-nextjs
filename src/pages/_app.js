import Navigation from '../main/components/Navigation.jsx';
import AuthContextProvider from "../main/contexts/AuthContext";
import AlertContextProvider from "../main/contexts/AlertContext";
import UserContextProvider from "../main/contexts/UserContext";

import "@/styles/globals.css";
import '../main/components/Alert/Alert.css';
import '../main/components/Movie/Movie.css';
import '../main/components/Recommended/Recommended.css';
import '../main/components/Search/Search.css';
import '../main/components/Trending/Trending.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <AlertContextProvider>
          <UserContextProvider>
            <Navigation />
            <Component {...pageProps} />
          </UserContextProvider>
        </AlertContextProvider>
      </AuthContextProvider>
    </>
  );
}
