"use client";
import { createContext, useState } from "react";
import { supabase } from "../../lib/supabase";
const SubscribeContextData = createContext();

function SubscribeContextProvider({ children }) {
  // Subcsribe form states
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async () => {
    const cleanEmail = email.trim().toLowerCase();

    if (!validateEmail(cleanEmail)) {
      setMessage("Please enter a valid email");
      setIsSuccess(false);

      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("subscribers")
        .insert([{ email: cleanEmail }]);

      if (error) {
        if (error.code === "23505") {
          setMessage("This email is already subscribed");
        } else {
          setMessage("Something went wrong. Try again.");
        }
        setIsSuccess(false);
        return;
      }

      setMessage("Thank you for joining!");
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setMessage("Unexpected error occurred.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  // ===========
  return (
    <SubscribeContextData.Provider
      value={{ email, setEmail, message, isSuccess, loading, handleSubscribe }}
    >
      {children}
    </SubscribeContextData.Provider>
  );
}

export { SubscribeContextProvider, SubscribeContextData };
