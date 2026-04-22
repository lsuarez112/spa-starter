## `src/components/`

Componentes **compartidos** a nivel aplicación.

### Regla

- Si un componente depende fuertemente de una feature (tipos, API, store), debe vivir en `features/<feature>/components`.

### Subcarpetas

- `ui/`: atómicos (estilo shadcn/ui). Sin lógica de negocio.
- `common/`: componentes compartidos más “pesados” (DataTable, Navbar, etc.), pero agnósticos de features.
