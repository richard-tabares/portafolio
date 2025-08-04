import { createClient } from "@supabase/supabase-js"

const bd = import.meta.env.VITE_APP_DB
const apikey = import.meta.env.VITE_API_KEY

export const supabase = createClient(bd,apikey)