import { dayMonths } from '@utils/ageCalculator'
import { z } from 'zod'

const errorMap = (error: z.ZodIssueOptionalMessage) => ({
  ...error,
  message: 'This field is required',
})

export const ageSchema = z
  .object({
    date: z
      .string({
        errorMap: errorMap,
      })
      .regex(/^\d+$/)
      .transform(Number)
      .refine((date) => date > 0 && date <= 31, {
        message: 'Must be a valid day',
      }),
    month: z
      .string({ errorMap: errorMap })
      .regex(/^\d+$/)
      .transform(Number)
      .refine((month) => month > 0 && month <= 12, {
        message: 'Must be a valid month',
      }),
    year: z
      .string({ errorMap: errorMap })
      .regex(/^\d+$/)
      .transform(Number)
      .refine((year) => year > 1900 && year <= new Date().getFullYear(), {
        message: 'Must be in the past',
      }),
    form: z.string().optional(),
  })
  .refine((age) => age.date <= dayMonths[age.month - 1], {
    message: 'Must be a valid date',
    path: ['form'],
  })

export type Age = z.infer<typeof ageSchema>
export type AgeForm = {
  form?: string
  date: string
  month: string
  year: string
}
