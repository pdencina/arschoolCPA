# AR School Puente Alto — Landing de Matrículas

Landing page optimizada para captura de leads vía Meta Ads + WhatsApp para el campus Puente Alto de AR School.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** para estilos
- **Supabase** para almacenamiento de leads
- **Meta Pixel** para tracking de conversiones
- **Vercel** para deploy

## Setup rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.local.example .env.local
# → Editar con tus credenciales de Supabase, WhatsApp y Meta Pixel

# 3. Crear tabla en Supabase
# → Ejecutar supabase/schema.sql en el SQL Editor de tu proyecto

# 4. Correr en desarrollo
npm run dev
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL de tu proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key de Supabase |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp sin `+` (ej: 56912345678) |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID del pixel de Meta/Facebook |

## Deploy

```bash
# Conectar con Vercel
npx vercel

# Deploy a producción
npx vercel --prod
```

## Flujo de conversión

1. Usuario llega desde Meta Ad (con UTM params)
2. Ve la landing → elige AR School o Play & Group
3. Llena formulario corto (nombre + teléfono) → lead se guarda en Supabase
4. Meta Pixel dispara evento `Lead` → Meta optimiza el ad
5. Alternativa: botón WhatsApp flotante para contacto directo

## TODO

- [ ] Reemplazar dirección, teléfono y email con datos reales
- [ ] Subir fotos reales del campus Puente Alto
- [ ] Configurar Supabase Edge Function para notificación por email/WhatsApp al equipo de admisiones
- [ ] Conectar Google Maps embed con coordenadas exactas
- [ ] Agregar testimonios reales en video
