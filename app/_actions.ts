'use server';

import prisma from '@/db/db';
import { getSession } from '@/lib/iron-session';
import { LoginUserSchema, RegisterUserSchema } from '@/lib/schema';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';

export async function registerUser(_: any, formData: FormData) {
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

export async function loginUser(currentState: any, formData: FormData) {
  try {
    const result = LoginUserSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!result.success) {
      return { error: result.error.format() };
    }

    const { email, password } = result.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { userNotExists: true };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { passwordNotMatch: true };
    }

    const session = await getSession();

    session.username = user.username;
    session.email = user.email;
    session.isLoggedIn = true;

    await session.save();

    revalidatePath('/login');
  } catch (error) {
    throw new Error('Something unexpected happened');
  }
}
