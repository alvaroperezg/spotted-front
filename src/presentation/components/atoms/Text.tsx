type TextProps = {
  children: React.ReactNode
  variant?: 'title' | 'subtitle' | 'body'
  className?: string
}

export function Text({ children, variant = 'body', className = '' }: TextProps) {
  const styles = {
    title: 'text-4xl font-bold',
    subtitle: 'text-xl text-gray-700',
    body: 'text-base text-gray-600',
  }

  return <p className={`${styles[variant]} ${className}`}>{children}</p>
}
