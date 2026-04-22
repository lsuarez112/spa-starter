## `src-new/lib/`

Inicialización y utilidades de librerías (cross-cutting).

### Ejemplos
- `http`/`httpClient` base.
- helpers de UI (`cn`, `tailwind-merge`), i18n init, date utils.
- mappers genéricos (sin dominio).

### Regla
- Si un helper es específico de un dominio (ej. dashboards), muévelo a `features/dashboards/utils`.
