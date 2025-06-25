type MetricCardProps = {
  title: string
  amount: string
  growth?: string
  positive?: boolean
}

export const MetricCard = ({ title, amount, growth, positive = true }: MetricCardProps) => {
  return (
    <div className="rounded-xl border px-6 py-4 bg-white shadow-sm">
      <p className="text-sm text-muted-foreground mb-2">{title}</p>
      <p className="text-2xl font-bold text-black">{amount}</p>
      {growth && (
        <p className={`text-sm mt-1 ${positive ? "text-green-600" : "text-red-600"}`}>
          {positive ? "+" : "-"}{growth} que el mes anterior
        </p>
      )}
    </div>
  )
}
