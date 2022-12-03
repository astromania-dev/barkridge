declare type SectionHeaderProps = {
  title: string
  subtitle: string
}

export const SectionHeader = ({title, subtitle}: SectionHeaderProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-zinc-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {subtitle}
      </p>
    </div>
  )
}
