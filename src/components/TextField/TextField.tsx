import { Age, AgeForm } from '@schemas/ageSchema'
import { InputHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'
import { useController } from 'react-hook-form'
import ErrorSpan from './ErrorSpan'
import styled from 'styled-components'
import Input from './Input'
import Label from './Label'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: keyof Age
  label: string
  control: Control<AgeForm>
}

const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TextField = (props: Props) => {
  const { field, fieldState } = useController({
    name: props.name,
    control: props.control,
    defaultValue: '',
  })

  return (
    <StyledTextField>
      <Label htmlFor={props.id} $hasError={!!fieldState.error}>
        {props.label}
      </Label>
      <Input $hasError={!!fieldState.error} {...props} {...field} />
      {fieldState.error && <ErrorSpan>{fieldState.error.message}</ErrorSpan>}
    </StyledTextField>
  )
}

export default TextField
