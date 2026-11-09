import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/disclosures")({
  head: () => ({
    meta: [{ title: "Disclosures | Kissena Baked Goods" }],
  }),
  component: Disclosures,
})

function Disclosures() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods, Inc.</p>
      <p className="mt-4 text-ink-soft">Amounts are whole US dollars.</p>
    </div>
  )
}