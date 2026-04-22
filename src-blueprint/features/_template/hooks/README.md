## `features/<feature>/hooks/`

Hooks internos del dominio (composición de lógica).

### Ejemplos
- `use<Feature>Filters`
- `use<Feature>Form`
- `use<Feature>Permissions`

### Regla
Separar obtención de datos (`api/`) de lógica de UI. Los hooks acá pueden combinar ambos, pero no deben renderizar UI.
