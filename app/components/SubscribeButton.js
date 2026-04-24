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
      className="cursor-pointer text-medium px-6 py-2 rounded-full shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
    >
      {loading ? "Subscribing..." : "Subscribe"}
    </button>
  );
}
