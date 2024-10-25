import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();
  const signin = async ({ emailId, password }) => {
    const sucessInput = handleInputsErrors(
      emailId,

      password
    );
    if (!sucessInput) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signin", { emailId, password });

      console.log(res);
      const data = res.data;
      console.log(` data : ${data.response}`);
      console.log(` data : ${data}`);
      if (data.error) {
        console.error(`data.error:${data.error}`);
        throw new Error(data.error);
      }

      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.response.data.error || error);
    } finally {
      setLoading(false);
    }
  };
  return { signin, loading };
};

export default useSignin;

function handleInputsErrors(
  emailId,

  password
) {
  if (!emailId || !password) {
    toast.error("Please fill out all fields");
    return false;
  }

  return true;
}
