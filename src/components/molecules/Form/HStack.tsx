declare type HStackProps = {
  label: string
  children: any
}

export const HStack = ({label, children}: HStackProps) => {
  return (
    <div
      className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-zinc-100 sm:dark:border-zinc-800 sm:pt-5"
    >
      <label className="block text-sm font-medium sm:mt-px sm:pt-2">
        {label}
      </label>

      <div className="mt-2 sm:col-span-2 sm:mt-0">
        {children}
      </div>
    </div>
  )
}
