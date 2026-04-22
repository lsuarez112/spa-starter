## `src-new/layouts/`

Layouts de alto nivel (estructura de página / navegación).

### Qué va aquí
- `AuthLayout`, `DashboardLayout`, `AppShell`, etc.
- Componentes que componen sidebar/topbar + `Outlet` de rutas.

### Reglas
- El layout puede usar providers/hook globales, pero evita lógica de negocio de features (delegar a features).
