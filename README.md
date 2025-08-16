# 🚀 Blog personal con Astro + Keystatic

Este proyecto es un **blog personal** desarrollado con [Astro](https://astro.build), integrado con [Keystatic](https://keystatic.com) como CMS sin servidor combinado con content de Astro .  
El diseño fue creado con la \*Lovalble** y el sitio está **desplegado en Netlify\*\*.

La idea principal es que sea un **side project** de código abierto, pensado como ejemplo para aprender, experimentar y mostrar un flujo moderno de creación de blogs con Astro.

---

## 📝 Contenido

- [📝 Contenido](#-contenido)
- [✨ Características](#-características)
- [📦 Instalación y uso](#-instalación-y-uso)

---

## ✨ Características

- ⚡ [**Astro**](https://astro.build/) para un rendimiento optimizado.
- 📝 [**Keystatic**](https://keystatic.com/) para la gestión de contenido (sin necesidad de base de datos).
- 🎨 Diseño generado con [**Lovalble**](https://lovable.dev/).
- ☁️ **Deploy en [Netlify](https://netlify.com/)** con CI/CD automático.
- 🔓 **Código abierto** para que puedas usarlo como base de tu propio proyecto.
- Licencia [MIT](https://github.com/matiasjgelpi/blog/blob/main/LICENSE).

---

## 📦 Instalación y uso

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/matiasjgelpi/blog.git](https://github.com/matiasjgelpi/blog.git)

# 2. Entrar al directorio
cd blog

# 3. Instalar dependencias
npm install
# o si prefieres
pnpm install
# o
yarn install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
http://localhost:4321

---

#Estructura del proyecto

/
├── public/          # Archivos estáticos
├── src/             # Código fuente
│   ├── components/  # Componentes de Astro
│   ├── content/     # Contenido gestionado con Keystatic combinado con content api de astro
│   ├── layouts/     # Layouts reutilizables
│   └── pages/       # Rutas del sitio
├── keystatic.config.ts # Configuración de Keystatic
├── astro.config.mjs    # Configuración de Astro
└── package.json

```
