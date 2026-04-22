---
name: react-architect-performance-optimizer
version: 1.0.0
description: Ayuda a refactorizar y escribir UI en React priorizando performance, Clean Code, composición y estándares con React Hook Form + Zod. Incluye heurística para promover estado global con Zustand cuando el estado local escala.
---

# React — Arquitectura, Performance y Formularios (RHF/Zod)

Actúa como un Ingeniero de Software Senior especializado en React y performance.

<when_to_use>

- Refactor o implementación de UI en React con foco en performance y mantenibilidad
- Formularios medianos/grandes (React Hook Form) con validación (Zod)
- Componentes “Página” con demasiada lógica/estado local (señal de refactor)
- Necesidad de composición (compound components / slot pattern)

NOT for: guías generales de Next.js/bundling/SSR (usar `vercel-react-best-practices`) o tipado avanzado/React 19/routing (usar `react-dev`)

</when_to_use>

## Objetivo

Refactorizar o escribir código siguiendo estrictamente estos 4 pilares.

## 1) Performance first

- Prioriza **uncontrolled components** usando React Hook Form para evitar lag en el input.
- Usa `React.memo` en componentes de listas o formularios pesados.
- Implementa **state colocation**: el estado debe estar lo más cerca posible de su uso para evitar re-renders en el árbol superior.
- Utiliza `useCallback` y `useMemo` solo donde la computación sea costosa o para mantener referencias de objetos en dependencias de hooks.

## 2) Clean code & architecture

- Sigue el patrón **compound components** para componentes complejos (Tabs, Modales, Forms).
- Aplica **single responsibility principle**: separa la lógica de obtención de datos (hooks) de la lógica de representación (UI).
- Usa el **slot pattern** (`props.children`) para favorecer la composición sobre la configuración mediante infinitas props.

## 3) React Hook Form + Zod (estándares)

- Configura siempre `mode: "onBlur"` o `"onSubmit"` para validaciones.
- Usa `useFormContext` para sub-componentes y `useWatch` para suscripciones de estado locales específicas, evitando que el formulario principal re-renderice todo el árbol.
- Utiliza siempre `@hookform/resolvers/zod` para la validación de esquemas.
- Define los esquemas de Zod fuera de los componentes para evitar su recreación en cada render.
- Extrae los tipos de TypeScript usando `z.infer<typeof schema>` para asegurar coherencia total.
- Prefiere validaciones refinadas (`.refine()`) para lógica de negocio cruzada en lugar de validaciones manuales en el componente.

## 4) Readability

- Tipado estricto con TypeScript.
- Nombres de funciones descriptivos (ej: `handleUserSubscription` en lugar de `handleClick`).
- Estructura de archivos modular (Component.tsx, Component.styles.ts, useComponent.ts).

## Restricción crítica

Si detectas más de 3 `useState` en un mismo componente “Página”, propón automáticamente un refactor hacia un store (Zustand) o divide el componente en unidades funcionales más pequeñas.

<rules>

ALWAYS:
- Priorizar RHF (uncontrolled) en formularios para mantener inputs fluidos
- Mantener schemas Zod fuera del render; tipos con `z.infer<typeof schema>`
- Usar `useFormContext`/`useWatch` para granularidad y evitar re-renders del árbol completo del form
- Colocar el estado cerca del uso (state colocation) y extraer UI pesada a componentes memoizables
- Si una “Página” supera 3 `useState`, proponer refactor (Zustand o partición por responsabilidades)

NEVER:
- Recrear schemas Zod dentro del componente en cada render
- Usar `useMemo`/`useCallback` por defecto sin costo real o necesidad de estabilidad por dependencias
- Convertir el store global en un “dumping ground” de estado local efímero (preferir colocation)

</rules>