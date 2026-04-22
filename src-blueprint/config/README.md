## `src-new/config/`

Configuración central de la aplicación.

### Qué va aquí
- Cliente HTTP (axios/fetch wrapper), base URLs, headers, interceptors.
- Mapeo de `import.meta.env` a un objeto `env`.
- Constantes globales (rutas, keys de localStorage, flags).

### Qué NO va aquí
- Lógica de negocio de una feature (va en `features/<feature>`).
