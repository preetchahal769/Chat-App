import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();
  const signUp = async ({
    userName,
    emailId,
    phoneNumber,
    role,
    password,
    confirmPassword,
  }) => {
    const sucessInput = handleInputsErrors(
      userName,
      emailId,
      phoneNumber,
      role,
      password,
      confirmPassword
    );

    if (!sucessInput) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signup", {
        userName,
        emailId,
        phoneNumber,
        role,
        password,
        confirmPassword,
      });

      const data = await res.data;

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.error || error);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

export default useSignup;

function handleInputsErrors(
  userName,
  emailId,
  phoneNumber,
  role,
  password,
  confirmPassword
) {
  if (
    !userName ||
    !emailId ||
    !phoneNumber ||
    !role ||
    !password ||
    !confirmPassword
  ) {
    toast.error("Please fill out all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }
  if (password.length < 5) {
    toast.error("Passwords must be 5 characters or more");
    return false;
  }

  return true;
}
