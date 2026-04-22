## `src/pages/`

Entradas de rutas (orquestación).

### Regla principal

Las páginas deben ser **delgadas**:
- componen layouts + features
- conectan params/searchParams con props de features
- no implementan lógica compleja ni state excesivo

Si una página supera 3 `useState`, mover estado a store (Zustand) o dividir en hooks/componentes.
