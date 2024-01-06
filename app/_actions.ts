'use server';

import prisma from '@/db/db';
import { RegisterUserSchema } from '@/lib/schema';
import bcrypt from 'bcrypt';

export async function registerUser(currentState: any, formData: FormData) {
  try {
    const result = RegisterUserSchema.safeParse({
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPass: formData.get('confirmPass'),
    });

    if (!result.success) {
      return { error: result.error.format() };
    }

    const { username, email, password } = result.data;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username,
          },
          {
            email,
          },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return { usernameExists: true };
      }
      if (existingUser.email === email) {
        return { emailExists: true };
      }
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    //TODO: User should sign in when his account is created
  } catch (error) {
    throw new Error('Something unexpected happened');
  }
}
