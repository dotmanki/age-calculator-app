import Card from '@components/Card/Card'
import TextField from '@components/TextField/TextField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Age, AgeForm, ageSchema } from '@schemas/ageSchema'
import { calculate } from '@utils/ageCalculator'
import { useState } from 'react'
import InputContainer from '@components/TextField/InputContainer'
import Button from '@components/Button/Button'
import ButtonContainer from '@components/Button/ButtonContainer'
import Display from '@components/Display/Display'

const AgeCalculator = () => {
  const [states, dispatch] = useState<{
    years: number | null
    months: number | null
    date: number | null
  }>({
    years: null,
    months: null,
    date: null,
  })
  const { control, handleSubmit } = useForm<AgeForm, null, Age>({
    resolver: zodResolver(ageSchema),
  })

  const onSubmit = handleSubmit((data) =>
    dispatch(calculate(data.year, data.month, data.date))
  )

  return (
    <Card>
      <InputContainer control={control}>
        <TextField
          placeholder='DD'
          label={'DAY'}
          id='day'
          type='number'
          control={control}
          name='date'
        />
        <TextField
          placeholder='MM'
          label={'MONTH'}
          id='month'
          type='number'
          name='month'
          control={control}
        />
        <TextField
          placeholder='YYYY'
          label={'YEAR'}
          id='year'
          type='number'
          name='year'
          control={control}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onSubmit} />
      </ButtonContainer>
      <Display
        primaryText={states.years?.toString() ?? '--'}
        secondaryText=' years'
      />
      <Display
        primaryText={states.months?.toString() ?? '--'}
        secondaryText=' months'
      />
      <Display
        primaryText={states.date?.toString() ?? '--'}
        secondaryText=' days'
      />
    </Card>
  )
}

export default AgeCalculator
