import {Field} from 'react-final-form'

export declare type SelectOption = {
  value: string
  label: string
}

declare type SelectProps = {
  label: string
  name: string
  options: SelectOption[]
  initialValue?: any
}

export const Select = ({label, name, options, initialValue}: SelectProps) => {
  return (
    <Field name={name} initialValue={initialValue}>
      {({input}) => (
        <div
          className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-zinc-100 sm:dark:border-zinc-800 sm:pt-5"
        >
          <label htmlFor={name} className="block text-sm font-medium sm:mt-px sm:pt-2">
            {label}
          </label>

          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <select
              className="block w-full rounded-md border-zinc-400 dark:border-zinc-500 dark:bg-zinc-900 shadow-sm focus:border-zinc-400 focus:dark:border-zinc-500 focus:ring-zinc-400 focus:dark:ring-zinc-500 sm:text-sm"
              {...input}
            >
              {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </Field>
  )
}
