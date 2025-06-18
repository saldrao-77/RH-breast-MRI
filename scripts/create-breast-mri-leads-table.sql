-- Create breast_mri_leads table for storing breast MRI consultation requests
CREATE TABLE IF NOT EXISTS breast_mri_leads (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  age INTEGER,
  zip_code VARCHAR(10),
  risk_factors TEXT[],
  insurance_provider VARCHAR(100),
  has_brca_mutation BOOLEAN DEFAULT FALSE,
  family_history_breast_cancer BOOLEAN DEFAULT FALSE,
  family_history_ovarian_cancer BOOLEAN DEFAULT FALSE,
  dense_breast_tissue BOOLEAN DEFAULT FALSE,
  previous_breast_biopsy BOOLEAN DEFAULT FALSE,
  preferred_location VARCHAR(100),
  urgency_level VARCHAR(20) DEFAULT 'standard',
  utm_source VARCHAR(50),
  utm_medium VARCHAR(50),
  utm_campaign VARCHAR(100),
  source VARCHAR(50) DEFAULT 'landing_page',
  processed BOOLEAN DEFAULT FALSE,
  engaged BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_breast_mri_leads_email ON breast_mri_leads(email);
CREATE INDEX IF NOT EXISTS idx_breast_mri_leads_created_at ON breast_mri_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_breast_mri_leads_processed ON breast_mri_leads(processed);
CREATE INDEX IF NOT EXISTS idx_breast_mri_leads_zip_code ON breast_mri_leads(zip_code);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_breast_mri_leads_updated_at 
    BEFORE UPDATE ON breast_mri_leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
