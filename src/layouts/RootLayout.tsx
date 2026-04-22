import { Link, Outlet } from '@tanstack/react-router'

/**
 * Layout raíz de la app (shell / estructura común).
 * Ver `src-new/layouts/README.md`.
 */
export function RootLayout() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: 16,
          padding: '12px 24px',
          borderBottom: '1px solid var(--border, #e5e5e5)',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ style: { fontWeight: 700 } }}
        >
          Inicio
        </Link>
        <Link to="/demo" activeProps={{ style: { fontWeight: 700 } }}>
          Demo Query
        </Link>
      </nav>
      <Outlet />
    </>
  )
}
