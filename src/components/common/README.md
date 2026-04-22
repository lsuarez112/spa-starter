## `src/components/common/`

Componentes compartidos complejos (pero **feature-agnostic**).

### Ejemplos

- `DataTable`, `PageHeader`, `ConfirmDialog`, `EmptyState`, `ErrorBoundary`.

### Reglas

- Aceptan datos por props (slot/compound components si aplica).
- No deben importar `features/<x>/api` ni `features/<x>/store`.
