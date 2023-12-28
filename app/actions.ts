'use server';

import { RegisterInputs } from './login/RegisterUser';

export async function registerUser(formData: RegisterInputs) {
  console.log(formData);
}
