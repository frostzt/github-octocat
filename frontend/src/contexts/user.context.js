import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useState, useEffect } from "react";

const ENDPOINT = "http://localhost:4000/api/v1/users";

const AuthContext = createContext({
  user: undefined,
  signUp: (event, creds) => {},
  signIn: (event, creds) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(undefined);
    }
  }, []);

  const signUp = async (event, creds) => {
    event.preventDefault();
    const { name, email, password } = creds;

    try {
      const response = await axios.post(
        ENDPOINT,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const signIn = async (event, creds) => {
    event.preventDefault();
    const { email, password } = creds;

    try {
      const response = await axios.post(
        `${ENDPOINT}/auth`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return <AuthContext.Provider value={{ user, signUp, signIn }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
