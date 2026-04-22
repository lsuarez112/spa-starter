## `src-new/features/`

Módulos de negocio independientes (por dominio).

### Estructura por feature
Cada `features/<feature>/` debe contener (según necesidad):
- `api/`: fetchers + hooks de TanStack Query (si aplica).
- `types/`: schemas Zod y tipos con `z.infer`.
- `store/`: Zustand **solo si** la feature lo requiere (evitar state global innecesario).
- `hooks/`: lógica interna y composición (separa data/UI).
- `components/`: UI propia de la feature.
- `utils/`: helpers privados del dominio.

### Reglas (de `SKILLS/react.md`)
- Formularios con React Hook Form + Zod (schemas fuera del render).
- Performance first: uncontrolled inputs, memoización selectiva.
