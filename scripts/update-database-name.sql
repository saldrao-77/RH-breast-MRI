-- This script is for reference - the database name change needs to be done in Supabase dashboard
-- Navigate to your Supabase project settings and update the project name to "robin-health-v0"

-- Verify the leads table exists with the correct structure
SELECT table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'leads' 
ORDER BY ordinal_position;
