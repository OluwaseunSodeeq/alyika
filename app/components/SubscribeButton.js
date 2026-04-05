export default function SubscribeButton({
  handleSubscribe,
  loading,
  btnBg,
  textColor,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={handleSubscribe}
      disabled={loading}
      style={{ backgroundColor: btnBg, color: textColor }}
      className="cursor-pointer text-medium px-6 py-2 rounded-full shadow-sm transition"
    >
      {loading ? "Subscribing..." : "Subscribe"}
    </button>
  );
}
