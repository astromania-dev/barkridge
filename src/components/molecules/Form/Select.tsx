import {Field} from 'react-final-form'

export declare type SelectOption = {
  value: string
  label: string
}

declare type SelectProps = {
  name: string
  options: SelectOption[]
  initialValue?: any
}

export const Select = ({name, options, initialValue}: SelectProps) => {
  return (
    <Field name={name} initialValue={initialValue}>
      {({input}) => (
        <select
          className="block w-full rounded-md border-zinc-400 dark:border-zinc-500 dark:bg-zinc-900 shadow-sm focus:border-zinc-400 focus:dark:border-zinc-500 focus:ring-zinc-400 focus:dark:ring-zinc-500 sm:text-sm"
          {...input}
        >
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      )}
    </Field>
  )
}
