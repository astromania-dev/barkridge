declare type PanelProps = {
  className?: string
  children: any
}

export const Panel = ({className, children}: PanelProps) => {
  return (
    <div className={[className, 'bg-white dark:bg-zinc-900 shadow rounded sm:rounded-lg'].join(' ')}>
      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
    </div>
  )
}
