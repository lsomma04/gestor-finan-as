export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <section className="w-full max-w-xl rounded-2x1 border border-slate-800 bg-slate-900 p-6 sm:p-10">
        <p className="mb-3 text-sm font-medium text-emerald-400">
          Finanças Pessoais
        </p>

        <h1 className="text-3x1 font-semibold tracking-tight sm:text-4x1">
          Gestor Financeiro
        </h1>

        <p className="mt-4 leading-relaxed text-slate-300">
          Organize suas receitas, despesas e objetivos em um só lugar.
        </p>
      </section>
    </main>
  );
}