interface BalanceProps {
  amount: number
}
export const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <div className="h-40 text-3xl bg-violet-300 max-h-40">
      <p className="text-center pt-10">PHP {amount} 💰</p>
    </div>
  )
}
