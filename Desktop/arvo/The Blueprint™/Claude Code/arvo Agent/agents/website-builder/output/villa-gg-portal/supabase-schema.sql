-- Villa GG Guest Portal — Supabase Schema
-- Run this in Supabase SQL Editor

CREATE TABLE bookings (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reservation_code  TEXT UNIQUE NOT NULL,
  guest_name        TEXT NOT NULL,
  guest_email       TEXT NOT NULL,
  guest_phone       TEXT,
  check_in          DATE NOT NULL,
  check_out         DATE NOT NULL,
  guest_count       INT NOT NULL,
  total_eur         INT NOT NULL,
  deposit_eur       INT NOT NULL,
  balance_eur       INT NOT NULL,
  deposit_status    TEXT NOT NULL DEFAULT 'pending' CHECK (deposit_status IN ('pending', 'paid', 'waived')),
  balance_status    TEXT NOT NULL DEFAULT 'pending' CHECK (balance_status IN ('pending', 'paid', 'waived')),
  notes             TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE experiences (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          TEXT UNIQUE NOT NULL,
  name          TEXT NOT NULL,
  category      TEXT NOT NULL CHECK (category IN ('FOOD', 'AIR', 'LAND', 'SEA', 'CULTURE', 'PARTY', 'HEALTH')),
  description   TEXT NOT NULL,
  duration_text TEXT,
  price_eur     INT NOT NULL,
  price_note    TEXT,
  image_url     TEXT,
  available     BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order    INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE experience_bookings (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id            UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  experience_id         UUID NOT NULL REFERENCES experiences(id),
  guest_name            TEXT NOT NULL,
  guest_email           TEXT NOT NULL,
  quantity              INT NOT NULL DEFAULT 1,
  total_eur             INT NOT NULL,
  stripe_session_id     TEXT UNIQUE,
  stripe_payment_intent TEXT,
  status                TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'cancelled', 'refunded')),
  preferred_date        DATE,
  notes                 TEXT,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_bookings_reservation_code ON bookings(reservation_code);
CREATE INDEX idx_bookings_check_in ON bookings(check_in);
CREATE INDEX idx_experience_bookings_booking_id ON experience_bookings(booking_id);
CREATE INDEX idx_experience_bookings_stripe_session ON experience_bookings(stripe_session_id);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER experiences_updated_at BEFORE UPDATE ON experiences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
