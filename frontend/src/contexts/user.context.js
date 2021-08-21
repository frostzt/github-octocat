import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useState, useEffect } from "react";

const ENDPOINT = "https://octotime.herokuapp.com/api/v1";

const AuthContext = createContext({
  user: undefined,
  signUp: (event, creds) => {},
  signIn: (event, creds) => {},
  createTask: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      axios
        .post(`${ENDPOINT}/users/get`, { email: user.email })
        .then((res) => {
          setUser(res.data.user[0]);
        })
        .catch((error) => console.error(error));
    } else {
      setUser(undefined);
    }
  }, []);

  const signUp = async (event, creds) => {
    event.preventDefault();
    const { name, email, password } = creds;

    try {
      const response = await axios.post(
        `${ENDPOINT}/users`,
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
        `${ENDPOINT}/users/auth`,
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

  const createTask = async (event, title) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${ENDPOINT}/tasks/create`, { email: user.email, title });
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return <AuthContext.Provider value={{ user, signUp, signIn, createTask }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
