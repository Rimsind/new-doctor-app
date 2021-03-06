import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { authReducer } from "./authReducer";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";
import { useRouter } from "next/router";
import { apiUrl } from "../config/api";

const GlobalContext = createContext();

const initialState = {
  loading: false,
  token: null,
  user: null,
  error: null,
};

const GlobalProvider = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(authReducer, initialState);
  // const [profile, setProfile] = useState();

  const router = useRouter();

  const logOut = () => {
    destroyCookie(null, "user");
    destroyCookie(null, "token");
    dispatchAuth({
      type: "LOGOUT",
    });
    router.push("/");
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const { token, user } = parseCookies();
      if (!!token && !!user) {
        auth.token = token;
        auth.user = JSON.parse(user);

        // const profileData = async () => {
        //   const res = await axios.get(
        //     `${apiUrl}/patients/${auth?.user?.profileId}`,
        //     {
        //       headers: {
        //         authorization: `Bearer ${auth.token}`,
        //       },
        //     }
        //   );
        //   const result = await res.data;
        //   return result;
        // };
        // setProfile(profileData);
      }
    }
    loadUserFromCookies();
  }, []);

  return (
    <GlobalContext.Provider value={{ auth, dispatchAuth, logOut }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAuth = () => useContext(GlobalContext);

export default GlobalProvider;
