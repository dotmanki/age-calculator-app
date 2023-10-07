import Card from '@components/Card/Card'
import TextField from '@components/TextField/TextField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Age, AgeForm, ageSchema } from '@schemas/ageSchema'
import { calculate } from '@utils/ageCalculator'
import { useState } from 'react'

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
      <button onClick={onSubmit}>SUBMIT</button>
      <h2>
        <span>{states.years ?? '--'}</span> years
      </h2>
      <h2>
        <span>{states.months ?? '--'}</span> months
      </h2>
      <h2>
        <span>{states.date ?? '--'}</span> days
      </h2>
    </Card>
  )
}

export default AgeCalculator
