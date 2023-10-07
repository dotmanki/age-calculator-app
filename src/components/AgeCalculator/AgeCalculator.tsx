import Card from '@components/Card/Card'
import TextField from '@components/TextField/TextField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AgeForm, ageSchema } from '@schemas/ageSchema'

const AgeCalculator = () => {
  const { control, handleSubmit } = useForm<AgeForm>({
    resolver: zodResolver(ageSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Card>
      <TextField
        placeholder='DD'
        label={'DAY'}
        id='day'
        type='number'
        control={control}
        name='day'
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
        <span>--</span> years
      </h2>
      <h2>
        <span>--</span> months
      </h2>
      <h2>
        <span>--</span> days
      </h2>
    </Card>
  )
}

export default AgeCalculator
