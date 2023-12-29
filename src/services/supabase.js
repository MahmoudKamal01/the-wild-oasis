import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zkibydpynynlvbazunxy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpraWJ5ZHB5bnlubHZiYXp1bnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4Mzk3NzEsImV4cCI6MjAxOTQxNTc3MX0.7QLts5rL8iaP41iCzpTC5VXVTdMWeru4s_fQUxNvSsE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
