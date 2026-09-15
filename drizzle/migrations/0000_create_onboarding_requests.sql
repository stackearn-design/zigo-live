CREATE TABLE public.onboarding_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('USER','HOST','PARTNER','SELLER','AGENCY')),
  full_name TEXT NOT NULL,
  company_name TEXT,
  agency_name TEXT,
  email TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  country TEXT NOT NULL,
  state TEXT,
  city TEXT,
  partner_type TEXT,
  website TEXT,
  social_media TEXT,
  experience TEXT,
  number_of_hosts TEXT,
  investment_capacity TEXT,
  expected_monthly_business TEXT,
  current_platform TEXT,
  hear_about_zigo TEXT,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  admin_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.onboarding_requests TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.onboarding_requests TO authenticated;
GRANT ALL ON public.onboarding_requests TO service_role;

ALTER TABLE public.onboarding_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
ON public.onboarding_requests FOR INSERT TO anon, authenticated
WITH CHECK (true);