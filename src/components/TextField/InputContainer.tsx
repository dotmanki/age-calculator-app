import { AgeForm } from '@schemas/ageSchema'
import { useEffect } from 'react'
import { Control, useController } from 'react-hook-form'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  control: Control<AgeForm>
}

const StyledInputContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 65%;
    gap: 2rem;
  }
`

const InputContainer = (props: Props) => {
  const { fieldState } = useController({
    name: 'form',
    control: props.control,
    defaultValue: '',
  })

  useEffect(() => {
    if (fieldState.error) {
      props.control.setError('date', fieldState.error)
      props.control.setError('month', { message: '' })
      props.control.setError('year', { message: '' })
    }
  }, [fieldState.error, props.control])
  return <StyledInputContainer {...props} />
}

export default InputContainer
