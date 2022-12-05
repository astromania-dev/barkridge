import {Field} from 'react-final-form'

declare type TextFieldProps = {
  name: string
  initialValue?: any
  required?: boolean
}

export const TextField = ({name, initialValue, required}: TextFieldProps) => {
  return (
    <Field name={name} initialValue={initialValue}>
      {({input}) => (
        <input
          type="text"
          required={required}
          className="block w-full rounded-md border-zinc-400 dark:border-zinc-500 dark:bg-zinc-900 shadow-sm focus:border-zinc-400 focus:dark:border-zinc-500 focus:ring-zinc-400 focus:dark:ring-zinc-500 sm:text-sm"
          {...input}
        />
      )}
    </Field>
  )
}
