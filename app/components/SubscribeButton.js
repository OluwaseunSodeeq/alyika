export default function SubscribeButton({
  btnBg,
  textColor,
  loading,
  handleSubscribe,
}) {
  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      style={{ backgroundColor: btnBg, color: textColor }}
      className="cursor-pointer text-medium px-6 py-2 rounded-full shadow-sm transition"
    >
      {loading ? "Subscribing..." : "Subscribe"}
    </button>
  );
}
//   return (
//     <button
//       {...props}
//       onClick={handleSubscribe}
//       disabled={loading}
//       style={{ backgroundColor: btnBg, color: textColor }}
//       className="cursor-pointer text-medium px-6 py-2 rounded-full shadow-sm transition"
//     >
//       {loading ? "Subscribing..." : "Subscribe"}
//     </button>
//   );
// }

/*
  // Subscriber Feature startts here
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const YOUR_FORM_ID =
    "1FAIpQLSdDP_UoAJp5LeCavojYqGKRy7Wsu2opDz-icOP72S7BJ_Nb7w";

  // ✅ Email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ Handle subscribe
  const handleSubscribe = async () => {
    if (!validateEmail(email) || email.trim() === "") {
      setMessage("Please enter a valid email");
      setIsSuccess(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    setLoading(true);

    try {
      // 🔥 CONNECT TO GOOGLE FORM
      await fetch(
        `https://docs.google.com/forms/d/e/${YOUR_FORM_ID}/formResponse`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `emailAddress=${encodeURIComponent(email)}`,
        },
      );

      // ✅ Success
      setMessage("Thank you for joining!");
      setIsSuccess(true);
      setEmail("");

      // ⏳ Hide message after 3s
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage("Something went wrong. Try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  // End here
*/
