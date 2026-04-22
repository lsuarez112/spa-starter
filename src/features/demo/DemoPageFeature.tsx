import { useQuery } from '@tanstack/react-query'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export function DemoPageFeature() {
  const { data, error, isPending } = useQuery({
    queryKey: ['demo', 'todo', 1],
    queryFn: async (): Promise<Todo> => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }
      return res.json() as Promise<Todo>
    },
  })

  return (
    <section style={{ padding: '24px', maxWidth: 640 }}>
      <h1 style={{ marginTop: 0 }}>Demo: TanStack Query</h1>
      <p style={{ color: 'var(--text-muted, #666)' }}>
        Datos públicos de ejemplo (JSONPlaceholder). La petición se cachea con
        React Query.
      </p>
      {isPending ? <p>Cargando…</p> : null}
      {error ? <p role="alert">Error: {error.message}</p> : null}
      {data ? (
        <pre
          style={{
            padding: 16,
            borderRadius: 8,
            background: 'var(--social-bg, #f5f5f5)',
            overflow: 'auto',
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : null}
    </section>
  )
}
