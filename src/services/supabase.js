import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://axhbaxqlrogqtolkzkpt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4aGJheHFscm9ncXRvbGt6a3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NzU4NzEsImV4cCI6MjA1NDQ1MTg3MX0.6L6UjzINjyl4HCP9FH1TQCv-7XOxzPGkaBwRRdboS9M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
