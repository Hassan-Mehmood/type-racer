'use server';

import prisma from '@/db/db';
import { compareHash, generateHash } from '@/lib/bcrypt';
import { createSession, destroySession } from '@/lib/iron-session';
import { LoginUserSchema, RegisterUserSchema } from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
        OR: [{ username }, { email }],
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

    const hashPassword = await generateHash(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    createSession(user);
    revalidatePath('/');
  } catch (error) {
    throw new Error('Something unexpected happened');
  }
  redirect('/profile');
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

    const isMatch = await compareHash(password, user.password);

    if (!isMatch) {
      return { passwordNotMatch: true };
    }

    await createSession(user);
    revalidatePath('/');
  } catch (error) {
    throw new Error('Something unexpected happened');
  }
  redirect('/profile');
}

export async function logout() {
  await destroySession();
  redirect('/');
}
