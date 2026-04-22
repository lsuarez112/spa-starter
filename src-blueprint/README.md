## `src-new/` (Blueprint)

Esta carpeta es un **blueprint** del clon reestructurado por features.  
No se usa por el runtime/build actual: sirve para **documentar y preparar** la migración en otra PC sin afectar `src/`.

### Principios (obligatorios)
- Seguir `SKILLS/react.md` (performance-first, clean architecture, RHF+Zod, readability).
- **Pages delgadas**: `pages/` solo orquesta features y layouts.
- **Separación data/UI**: la lógica de datos/estado vive en `features/<feature>/api|hooks|store`, la UI en `features/<feature>/components` o `components/common|ui` si es compartida.

### Estructura
Revisa el `README.md` dentro de cada carpeta para responsabilidades y ejemplos.
