import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email('e-mail inválido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;