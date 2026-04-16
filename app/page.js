import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
}
export const revalidate = 259200;
// Checked!
