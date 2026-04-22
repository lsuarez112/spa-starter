# Base SPA (React 19 + Vite) — Arquitectura por features

Este repositorio es una **base sólida** para arrancar y escalar una SPA con:

- **React 19 + TypeScript + Vite**
- **TanStack Router** (rutas tipadas)
- **TanStack Query** (server-state y cache)
- **React Hook Form + Zod + `@hookform/resolvers`** (formularios tipados y performantes)
- **Zustand** (estado global cuando corresponde)
- **Skills versionadas en el repo** (`.agents/skills/`) para guiar al agente con estándares y mejores prácticas

## Comandos básicos (poner en marcha)

> Este proyecto usa `pnpm` (recomendado). Si preferís `npm`, también funciona.

### 1) Instalar dependencias

```bash
pnpm install
```

### 2) Ejecutar en modo desarrollo

```bash
pnpm dev
```

### 3) Build de producción (TypeScript + Vite)

```bash
pnpm build
```

### 4) Lint

```bash
pnpm lint
```

### 5) Preview del build

```bash
pnpm preview
```

## Estructura del proyecto (blueprint)

- **`src/pages/`**: entradas de rutas (deben ser *delgadas*; orquestan features).
- **`src/features/`**: módulos por dominio (UI + hooks + types + api + store).
- **`src/providers/`**: providers globales (QueryClient, auth, theme, etc.).
- **`src/layouts/`**: shell/layouts (estructura común).
- **`src/stores/`**: Zustand global (solo transversal; no “dumping ground”).

Ver también los `README.md` dentro de `src/` para responsabilidades.

## Skills incluidas (resumen)

Estas skills viven en `.agents/skills/` y se versionan junto al repo:

- **`react-dev`**: patrones de React + TypeScript (incluye router, hooks, tipado).
- **`vercel-react-best-practices`**: reglas de performance (bundle, re-renders, async, etc.).
- **`react-architect-performance-optimizer`**: convenciones del equipo (arquitectura, performance-first, RHF+Zod, heurística de Zustand).
- **`shadcn`** (opcional): guía para gestionar componentes shadcn/ui cuando decidas usarlos.
- **`tailwind-css-patterns`** (opcional): patrones de layout/estilos si adoptás Tailwind.
- **`ui-ux-pro-max`** (opcional): guía de UI/UX para decisiones de interfaz.

## Ejemplos de prompts (para que el agente use las skills)

### Ejemplo 1 — crear un feature nuevo siguiendo el blueprint

> Prompt:
> “Creá el feature `reports` siguiendo el blueprint de `src/features/` (pages delgadas), con TanStack Router para la ruta `/reports`. Usá mejores prácticas de `react-dev` y `vercel-react-best-practices`.”

### Ejemplo 2 — formulario con RHF + Zod (y performance)

> Prompt:
> “Implementá un formulario de ‘Crear usuario’ con React Hook Form + Zod + resolver, validación en `onBlur`, y usando `useFormContext`/`useWatch` para evitar re-renders. Seguí `react-architect-performance-optimizer`.”

### Ejemplo 3 — estado global (Zustand) solo si corresponde

> Prompt:
> “Tengo 4 `useState` en una Page. Refactorizá: colocalizá estado y/o movelo a Zustand si es transversal. Seguí `react-architect-performance-optimizer` y justificá la decisión.”

