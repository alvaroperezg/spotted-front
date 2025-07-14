type TagProps = {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
      {children}
    </span>
  )
}
