## `src-new/components/`

Componentes **compartidos** a nivel aplicación.

### Regla
- Si un componente depende fuertemente de una feature (tipos, API, store), debe vivir en `features/<feature>/components`.

### Subcarpetas
- `ui/`: atómicos (shadcn/radix wrappers). Sin lógica de negocio.
- `common/`: componentes compartidos más “pesados” (DataTable, Navbar, etc.), pero igualmente agnósticos de features.
