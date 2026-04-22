## `src-new/pages/`

Entradas de rutas (React Router).

### Regla principal
Las páginas deben ser **delgadas**:
- componen layouts + features
- conectan params/searchParams con props de features
- no implementan lógica compleja ni state excesivo

Si una página supera 3 `useState`, aplicar `SKILLS/react.md`: mover estado a store (Zustand) o dividir en hooks/componentes.
