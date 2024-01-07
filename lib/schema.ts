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

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
