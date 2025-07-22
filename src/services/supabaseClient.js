import { createClient } from "@supabase/supabase-js"

const bd = 'https://huexqzebekzvmuxefjmr.supabase.co'
const apikey = 'sb_publishable_nDm47em1sQDmhIYLo6Ijnw_F94z1D8M'

export const supabase = createClient(bd,apikey)