## `src-new/features/_template/` (plantilla)

Plantilla para crear una feature nueva copiando la estructura mínima.

### Guía rápida
1. Copia `_template` a `features/<feature-name>/`.
2. Renombra exports, tipos y rutas.
3. Mantén **data vs UI**: `api|hooks|store` no se mezcla con `components`.

### Naming sugerido
- `api/<feature>.api.ts` (fetchers)
- `api/<feature>.queries.ts` (TanStack Query hooks)
- `types/<feature>.schema.ts` (Zod)
- `store/use<Feature>Store.ts` (Zustand)
