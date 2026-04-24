import { supabase } from "../../../lib/supabase";

export async function GET() {
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnu-jzKEnWbgElEg5iL7HTpdkyeuJBjCUCzeAYraqy-vKvU1-uFg8CCA_TkAuh9Jdp8F8xyIKtcvMM/pub?gid=0&single=true&output=csv";

  const res = await fetch(sheetURL);
  const csv = await res.text();

  // parse CSV
  const Papa = (await import("papaparse")).default;
  const parsed = Papa.parse(csv, { header: true });

  const members = parsed.data
    .filter((row) => row["First Name"]) // remove empty rows
    .map((row) => ({
      first_name: row["First Name"],
      last_name: row["Last Name"],
      role: row["Role"],
    }));

  //  UPSERT ( to prevents duplicates)
  const { error } = await supabase.from("team").upsert(members, {
    onConflict: "first_name,last_name,role",
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({
    success: true,
    inserted: members.length,
  });
}
