import { z } from 'zod';

export const RegisterUserSchema = z
  .object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPass: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ['confirmPass'],
  });

// .object({
//   username: z.string().min(1, 'Username is required'),
//   email: z.string().email('Invalid eamil address'),
//   password: z.string().min(6, 'Password must be greated than 6 characters'),
//   confirmPass: z.string().min(6, 'Password must be greated than 6 characters'),
// })
