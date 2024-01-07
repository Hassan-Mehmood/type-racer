import bcrypt from 'bcrypt';

export async function generateHash(password: string) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashPassword = await bcrypt.hash(password, salt);

  return hashPassword;
}

export function compareHash(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
