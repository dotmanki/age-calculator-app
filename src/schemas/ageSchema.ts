import { z } from 'zod'

export const ageSchema = z.object({
  day: z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .refine((day) => day > 0 && day <= 31),
  month: z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .refine((month) => month > 0 && month <= 12),
  year: z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .refine((year) => year > 1900 && year <= new Date().getFullYear()),
})

export type Age = z.infer<typeof ageSchema>

export type AgeForm = {
  day: string
  month: string
  year: string
}
