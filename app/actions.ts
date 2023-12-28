'use server';

import { RegisterInputs } from './login/RegisterUser';
import prisma from '@/db';

export async function registerUser(formData: RegisterInputs) {
  const newUser = await prisma.user.create({
    data: {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPass: formData.confirmPass,
    },
  });
}
