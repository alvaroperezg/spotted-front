type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const base = 'px-6 py-3 rounded-lg font-medium transition'
  const styles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}
