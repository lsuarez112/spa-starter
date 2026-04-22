## `src/stores/`

Stores **globales** de la aplicación (Zustand).

### Cuándo usar

- Estado transversal (auth/session, UI global, preferencias).

### Cuándo NO usar

- Estado local de un dominio (preferir `features/<feature>/store`).
