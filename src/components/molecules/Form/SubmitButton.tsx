declare type SubmitButtonProps = {
  label: string
  disabled?: boolean
}

export const SubmitButton = ({label, disabled}: SubmitButtonProps) => {
  return (
    <div
      className="sm:border-t sm:border-zinc-100 sm:dark:border-zinc-800 sm:pt-5"
    >
      <div className="flex justify-end">
        <button
          type="submit"
          className="ml-3 inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-500 bg-white dark:bg-zinc-900 py-2 px-4 text-sm font-medium shadow-sm hover:bg-zinc-900 hover:dark:bg-zinc-100 hover:text-white hover:dark:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:dark:ring-zinc-500 focus:ring-offset-2"
          disabled={disabled}
        >
          {label}
        </button>
      </div>
    </div>
  )
}
