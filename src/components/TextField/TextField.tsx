import { Age, AgeForm } from '@schemas/ageSchema'
import { InputHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'
import { useController } from 'react-hook-form'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: keyof Age
  label: string
  control: Control<AgeForm>
}

const TextField = (props: Props) => {
  const { field } = useController({
    name: props.name,
    control: props.control,
    defaultValue: '',
  })

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} {...field} />
    </>
  )
}

export default TextField
