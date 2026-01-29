# CLAUDE.md - Guía para trabajar con Claude Code

Este archivo contiene información contextual para trabajar con Claude Code en este proyecto.

## Resumen del Proyecto

Blog personal de Matías Gelpi construido con Astro 5 + Keystatic CMS + Tailwind CSS 4.

## Comandos Principales

```bash
npm run dev      # Servidor de desarrollo (localhost:4321)
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Arquitectura

### Stack

- **Astro 5**: Framework principal (SSR con adapter de Netlify)
- **Keystatic**: CMS headless, almacena contenido en GitHub como archivos Markdoc
- **Tailwind CSS 4**: Estilos, integrado via plugin Vite (`@tailwindcss/vite`)
- **React 19**: Componentes interactivos (ThemeToggle, UI components)
- **Markdoc**: Formato de contenido para posts

### Estructura de Archivos Clave

```
src/
├── content/
│   ├── config.ts          # Esquemas Zod para colecciones
│   ├── posts/*.mdoc       # Artículos del blog
│   ├── about/index.mdoc   # Página sobre mí
│   └── hero/index.mdoc    # Contenido del hero
├── components/
│   ├── ui/                # Componentes estilo shadcn/ui
│   ├── Header.astro
│   ├── HeroSection.astro
│   └── BlogPost.astro
├── pages/
│   ├── index.astro        # Página principal
│   ├── sobre-mi.astro     # Página about
│   ├── posts/[slug].astro # Página de post individual
│   └── 404.astro
└── layouts/
    └── Layout.astro       # Layout principal
```

### Configuraciones Importantes

| Archivo | Propósito |
|---------|-----------|
| `astro.config.mjs` | Integraciones: React, Markdoc, Keystatic, Netlify adapter |
| `keystatic.config.ts` | Esquema del CMS: posts, about, hero |
| `tailwind.config.js` | Tema: colores, fuentes, animaciones |
| `tsconfig.json` | Path aliases: `@/*`, `@assets/*` |

## Patrones del Código

### Colecciones de Contenido

Los posts se obtienen con `getCollection("posts")` de Astro y se ordenan por fecha descendente.

### Estilos

- Usa variables CSS HSL para colores (ej: `hsl(var(--background))`)
- Tema oscuro via clase `.dark` en el root
- Fuentes serif: `font-serif-display` y `font-serif-body`

### Componentes UI

Siguen el patrón shadcn/ui:
- Usan `class-variance-authority` para variantes
- Composición con `@radix-ui/react-slot`
- Utilidad `cn()` en `src/lib/utils.ts` para merge de clases

## Contenido

### Crear un Post

El contenido se gestiona desde Keystatic (`/keystatic` en dev). Esquema de post:

```typescript
{
  title: string,      // Genera el slug
  excerpt: string,    // Descripción
  date: Date,
  category: string,
  readTime: string,
  image?: string,
  featured: boolean,
  content: Markdoc
}
```

### Rutas

- `/` - Home con listado de posts
- `/sobre-mi` - Página about
- `/posts/[slug]` - Post individual
- `/keystatic` - Panel del CMS (solo en dev)

## Variables de Entorno

- `SKIP_KEYSTATIC`: Definir para omitir Keystatic en builds (útil para CI/CD)

## Notas para Modificaciones

1. **Agregar nuevos campos a posts**: Modificar `keystatic.config.ts` Y `src/content/config.ts`
2. **Cambiar estilos de tema**: Editar variables en `tailwind.config.js` o `src/styles/global.css`
3. **Nuevas páginas**: Crear en `src/pages/`
4. **Componentes React**: Usar extensión `.tsx` y agregar `client:load` o similar en Astro

## Deploy

Configurado para Netlify. El adapter está en `astro.config.mjs`.
