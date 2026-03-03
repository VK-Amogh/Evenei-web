import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nvoneskgaheuhavsivco.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52b25lc2tnYWhldWhhdnNpdmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NjAzMDAsImV4cCI6MjA4ODEzNjMwMH0.ZqFgkz4CoPuoCV4Iqhu0c5RhtEU_WlkBMbSdcP9LPyc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
