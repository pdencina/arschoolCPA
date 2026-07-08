-- Tabla de leads para la landing page de Puente Alto
-- Ejecutar en el SQL Editor de Supabase

create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  nombre text not null,
  telefono text not null,
  email text,
  programa text not null check (programa in ('ar-school', 'play-group')),
  nivel_interes text,
  comuna text default 'Puente Alto',
  mensaje text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  contactado boolean default false,
  notas_internas text
);

-- RLS: solo insertar desde anon (formulario público), leer requiere autenticación
alter table public.leads enable row level security;

-- Política: cualquiera puede insertar (formulario público)
create policy "Permitir insert público" on public.leads
  for insert
  with check (true);

-- Política: solo usuarios autenticados pueden leer
create policy "Solo auth puede leer" on public.leads
  for select
  using (auth.role() = 'authenticated');

-- Índices útiles para filtrar leads
create index if not exists idx_leads_programa on public.leads(programa);
create index if not exists idx_leads_created_at on public.leads(created_at desc);
create index if not exists idx_leads_contactado on public.leads(contactado);
