
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ldslbttvhweizpqgyqwn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkc2xidHR2aHdlaXpwcWd5cXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTMyNTMsImV4cCI6MjAyMTMyOTI1M30.Y9cxdiS-Ekg15pPi1LNkqNwpgJbTCAPmxSO8XACumPE";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;