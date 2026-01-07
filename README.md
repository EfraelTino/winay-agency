# Wiñay — Sitio web (Astro)

Documento de referencia y guía de desarrollo para el proyecto "Wiñay".

## Contenido

- **Descripción**: resumen del proyecto
- **Requisitos**: dependencias necesarias
- **Instalación**: cómo configurar el entorno local
- **Comandos**: scripts disponibles (desarrollo, build, preview)
- **Estructura del proyecto**: árbol y descripción de carpetas clave
- **Componentes**: descripción de componentes y layouts principales
- **Despliegue**: recomendaciones para producción
- **Contribuir**: cómo colaborar
- **Contacto**: información de autor / mantenimiento

---

## Descripción

Wiñay es un sitio web construido con Astro y TailwindCSS. Está pensado para servir contenido estático con componentes reutilizables y una estructura de páginas sencilla.

## Requisitos

- Node.js (recomendado >= 18)
- pnpm (recomendado) o npm/yarn
- Conexión a internet para instalar dependencias

El proyecto incluye integraciones con:
- `@astrojs/tailwind` para estilos
- `@astrojs/sitemap` para generar sitemap
- `@astrojs/partytown` para mover scripts de terceros a un web worker
- `astro-cloudinary` y `astro-seo` para gestión de imágenes y SEO

## Instalación (rápida)

Clona el repositorio y entra al directorio del proyecto:

```bash
git clone <repo-url>
cd wiñay
```

Instala dependencias (ejemplo con pnpm):

```bash
pnpm install
```

Si usas npm:

```bash
npm install
```

## Comandos disponibles

Los scripts definidos en `package.json` son los siguientes:

- **Desarrollo**: ejecuta el servidor local con recarga en caliente

```bash
pnpm run dev
# o
npm run dev
```

- **Compilar**: genera la versión lista para producción

```bash
pnpm run build
# o
npm run build
```

- **Previsualizar build**: sirve la carpeta de producción localmente

```bash
pnpm run preview
# o
npm run preview
```

También hay un comando auxiliar para ejecutar comandos de `astro` directamente:

```bash
pnpm run astro -- --help
```

## Estructura del proyecto

Estructura principal (resumida):

```
.
├─ astro.config.mjs
├─ package.json
├─ public/
│  └─ assets/
└─ src/
   ├─ global.css
   ├─ components/
   │  ├─ Cal.astro
   │  ├─ Footer.astro
   │  ├─ Header.astro
   │  ├─ Main.astro
   │  └─ ui/
   │     ├─ Clients.astro
   │     ├─ Metodologia.astro
   │     ├─ Testimonial.astro
   │     └─ Video.astro
   ├─ layouts/
   │  └─ Layout.astro
   └─ pages/
      └─ index.astro
```

Descripción breve:
- `public/assets/`: activos estáticos (imágenes, fuentes, etc.)
- `src/global.css`: estilos globales (Tailwind + utilidades)
- `src/components/`: componentes reutilizables de UI
- `src/components/ui/`: componentes de secciones específicas
- `src/layouts/Layout.astro`: layout base que envuelve las páginas
- `src/pages/`: rutas y páginas del sitio (ej. `index.astro`)

## Componentes y patrones

- `Header.astro`: barra superior / navegación.
- `Footer.astro`: pie de página y enlaces de contacto.
- `Main.astro`: contenedor principal usado en páginas.
- `Cal.astro`: componente para calendario o fecha (según nombre).
- `ui/*`: secciones modulares (clientes, metodología, testimonios, video).

Usa estos componentes para mantener consistencia y facilitar la composición de nuevas páginas.

## Estilo y configuración

El proyecto usa TailwindCSS integrado vía `@astrojs/tailwind`. Revisa `src/global.css` para ver las capas de estilo y las utilidades activadas.

## SEO y rendimiento

Se han incluido dependencias para SEO (`astro-seo`) y para desplazar scripts de terceros (`@astrojs/partytown`) con el objetivo de mejorar tiempo de carga y buenas prácticas.

## Despliegue

Recomendaciones generales:

- Plataforma estática (Netlify, Vercel, Cloudflare Pages): usar el comando de build `pnpm run build` y configurar la carpeta de salida (`dist` por defecto con Astro estático).
- En Vercel: crear proyecto, apuntar al repositorio y usar los scripts de `package.json` (Build: `pnpm run build`, Output: `dist`).
- Si necesitas SSR: añade y configura el adaptador de Astro correspondiente.

Pasos típicos para deploy en Vercel/Netlify:

1. Push a la rama principal (ej. `main` o `master`).
2. En la plataforma de hosting, conecta el repositorio.
3. Establece el comando de build `pnpm run build` y la carpeta de publicación `dist`.

## Pruebas y calidad

Actualmente no hay pruebas automatizadas incluidas. Se recomienda añadir:

- Linters (ESLint) y formateo (Prettier) si se desea coherencia de código.
- Pruebas unitarias/integración con Vitest o Playwright para e2e según necesidades.

## Contribuir

Guía rápida para contribuir:

1. Crea una issue describiendo tu propuesta o bug.
2. Abre una rama con nombre claro: `feat/descripcion` o `fix/descripcion`.
3. Haz commits atómicos y abre un Pull Request (PR) hacia la rama principal.
4. Describe los cambios en el PR y añade capturas o instrucciones si aplica.

Buenas prácticas:
- Mantén el estilo consistente (si añades ESLint/Prettier, sigue sus reglas).
- Documenta cambios importantes en `CHANGELOG.md`.

## Checklist antes de publicar

- [ ] Ejecutar `pnpm run build` sin errores.
- [ ] Revisar contenido y meta tags para SEO.
- [ ] Verificar recursos en `public/assets/` y tamaños de imagen.

## Notas finales y contacto

Si quieres que incluya guía de despliegue específica (p. ej. configuración de Vercel), o añadir archivos de contribución (`CONTRIBUTING.md`) y licencia (`LICENSE`), dímelo y lo añado.

Mantenedor: proyecto local en `wiñay` (directorio de trabajo).

---

_Generado: documentación base del proyecto. Adapta según necesidades específicas de despliegue y políticas internas._
# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
