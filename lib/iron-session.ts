import { User } from '@prisma/client';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

const defaultSession = {
  username: '',
  email: '',
  isLoggedIn: false,
};

export async function getSession() {
  const session = await getIronSession<typeof defaultSession>(cookies(), {
    password: process.env.COOKIES_SECRET!,
    cookieName: 'typeracer_user_session',

    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400000, // Expires in 1 day
    },
  });

  if (!session.isLoggedIn) {
    session.username = defaultSession.username;
    session.email = defaultSession.email;
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function createSession(user: User) {
  const session = await getSession();

  session.username = user.username;
  session.email = user.email;
  session.isLoggedIn = true;

  await session.save();
}

export async function destroySession() {
  const session = await getSession();
  session.destroy();
}
