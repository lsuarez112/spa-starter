## `src-new/hooks/`

Hooks **globales** reutilizables (no pertenecen a un dominio específico).

### Ejemplos
- `useLocalStorage`, `useMediaQuery`, `useDebouncedValue`.

### Regla
- Si el hook conoce endpoints, tipos o stores de un dominio, debe vivir en `features/<feature>/hooks` o `features/<feature>/api`.
