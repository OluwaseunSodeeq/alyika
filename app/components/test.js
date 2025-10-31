import { useEffect } from "react";

export default function Test() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const output = fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(output);
  }, []);

  // Using axios for http request
  useEffect(() => {
    axios
      .get("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [open]);
  return <div>Test Component</div>;
}
