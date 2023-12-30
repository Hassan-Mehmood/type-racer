'use server';

import { RegisterInputs } from './login/RegisterUser';
import prisma from '@/db/db';

export async function registerUser(formData: RegisterInputs) {
  const { username, email, password, confirmPass } = formData;

  console.log(username, email, password, confirmPass);

  // if (
  //   username.trim().length === 0 ||
  //   email.trim().length === 0 ||
  //   password.trim().length === 0 ||
  //   confirmPass.trim().length === 0
  // ) {
  //   return;
  // }

  // if (password.trim().length < 6) {
  //   return;
  // }

  // if (password.trim() !== confirmPass.trim()) {
  //   return;
  // }

  // const newUser = await prisma.user.create({
  //   data: {
  //     username,
  //     email,
  //     password,
  //     confirmPass,
  //   },
  // });
}
