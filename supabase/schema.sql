-- Minimal Supabase schema for demo deploy (extend in production)
create extension if not exists "uuid-ossp";
create table if not exists organizations(
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  created_at timestamptz default now()
);
create table if not exists ai_systems(
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  name text not null,
  risk_category text default 'unknown',
  created_at timestamptz default now()
);
alter table organizations enable row level security;
alter table ai_systems enable row level security;
create policy "org read" on organizations for select using (true);
create policy "sys read" on ai_systems for select using (true);
