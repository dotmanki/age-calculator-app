import { Age, AgeForm } from '@schemas/ageSchema'
import { InputHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'
import { useController } from 'react-hook-form'
import ErrorSpan from './ErrorSpan'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: keyof Age
  label: string
  control: Control<AgeForm>
}

const TextField = (props: Props) => {
  const { field, fieldState } = useController({
    name: props.name,
    control: props.control,
    defaultValue: '',
  })

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} {...field} />
      {fieldState.error && <ErrorSpan>{fieldState.error.message}</ErrorSpan>}
    </>
  )
}

export default TextField
