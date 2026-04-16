// import { createClient } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export async function getStolenBreathStats() {
  //   const supabase = createClient();
  const { data, error } = await supabase
    .from("the_stolen_breath")
    .select("a_copy_amount,sold_copies")
    .single();

  if (error) {
    console.error("Error fetching stats:", error);
    return { sold: 200, a_copy_amount: 2500 }; // Fallback values
  }
  return data;
}
