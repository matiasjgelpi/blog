# Blog Personal - Matías Gelpi

Blog personal desarrollado con [Astro](https://astro.build), integrado con [Keystatic](https://keystatic.com) como CMS y desplegado en Netlify.

El diseño fue creado con [Lovable](https://lovable.dev/). Es un side project de código abierto, pensado como ejemplo para aprender, experimentar y mostrar un flujo moderno de creación de blogs con Astro.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Astro](https://astro.build/) | v5 | Framework principal |
| [Keystatic](https://keystatic.com/) | v0.5 | CMS headless (almacenamiento en GitHub) |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos |
| [React](https://react.dev/) | v19 | Componentes interactivos |
| [Markdoc](https://markdoc.dev/) | - | Formato de contenido |
| [Netlify](https://netlify.com/) | - | Deploy con CI/CD automático |

## Requisitos

- Node.js 18+
- npm, pnpm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/matiasjgelpi/blog.git
cd blog

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:4321
```

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio para producción |
| `npm run preview` | Previsualiza el build de producción localmente |

## Estructura del Proyecto

```
blog/
├── public/               # Archivos estáticos
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes Astro y React
│   │   └── ui/           # Componentes UI reutilizables
│   ├── content/          # Contenido del blog (Markdoc)
│   │   ├── posts/        # Artículos del blog
│   │   ├── about/        # Página "Sobre mí"
│   │   └── hero/         # Contenido del hero
│   ├── hooks/            # Custom hooks de React
│   ├── layouts/          # Layouts de Astro
│   ├── lib/              # Utilidades
│   ├── pages/            # Páginas y rutas
│   └── styles/           # Estilos globales
├── astro.config.mjs      # Configuración de Astro
├── keystatic.config.ts   # Configuración del CMS
├── tailwind.config.js    # Configuración de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```

## Gestión de Contenido

El contenido se gestiona a través de Keystatic CMS:

1. Inicia el servidor: `npm run dev`
2. Navega a `http://localhost:4321/keystatic`

### Colecciones

- **Posts**: Artículos del blog con título, descripción, fecha, categoría, tiempo de lectura e imagen
- **About**: Página "Sobre mí" con información de contacto
- **Hero**: Contenido de la sección principal

### Esquema de Posts

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | string | Título del post (genera el slug) |
| `excerpt` | text | Descripción breve |
| `date` | date | Fecha de publicación |
| `category` | string | Categoría del post |
| `readTime` | string | Tiempo estimado de lectura |
| `image` | image | Imagen destacada (opcional) |
| `featured` | boolean | Marcar como destacado |
| `content` | markdoc | Contenido del artículo |

## Configuración

### Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `SKIP_KEYSTATIC` | Si está definida, omite Keystatic en el build |

### Path Aliases (TypeScript)

```typescript
"@/*"       → "./src/*"
"@assets/*" → "./src/assets/*"
```

## Despliegue

El proyecto está configurado para Netlify con CI/CD automático.

```bash
# Build de producción
npm run build

# Build sin CMS (producción estática)
SKIP_KEYSTATIC=true npm run build
```

## Licencia

[MIT](https://github.com/matiasjgelpi/blog/blob/main/LICENSE) - Código abierto para que puedas usarlo como base de tu propio proyecto.
