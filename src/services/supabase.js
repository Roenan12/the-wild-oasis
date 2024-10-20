import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bjtosamxaojsnklbpite.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdG9zYW14YW9qc25rbGJwaXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNDAwMzgsImV4cCI6MjA0NDcxNjAzOH0.Fq8zUjAqDtkcAUQ1NSeS55LELNGm69lvzMsfBQF2pN8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
