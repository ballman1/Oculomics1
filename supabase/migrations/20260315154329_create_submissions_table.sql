/*
  # Create submissions table

  ## Purpose
  Stores user-submitted entries for editorial review before being added to the directory.

  ## New Tables
  - `submissions`
    - `id` (uuid, primary key)
    - `submission_type` (text) - company, product, research, dataset, event, academic, consortium, editorial_contact
    - `submitter_name` (text)
    - `submitter_email` (text)
    - `submitter_organization` (text, nullable)
    - `status` (text) - pending, approved, rejected, flagged. Default: 'pending'
    - `data` (jsonb) - flexible payload for the submitted form fields
    - `admin_notes` (text, nullable) - internal notes from reviewers
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ## Security
  - RLS enabled
  - Anyone (anon) can INSERT new submissions
  - Authenticated users (admins) can SELECT, UPDATE all submissions
  - No public read access to submissions queue
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_type text NOT NULL,
  submitter_name text NOT NULL,
  submitter_email text NOT NULL,
  submitter_organization text,
  status text NOT NULL DEFAULT 'pending',
  data jsonb NOT NULL DEFAULT '{}',
  admin_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit entries"
  ON submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submission status"
  ON submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER submissions_updated_at
  BEFORE UPDATE ON submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE INDEX IF NOT EXISTS submissions_status_idx ON submissions (status);
CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions (created_at DESC);
