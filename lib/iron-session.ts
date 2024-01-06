import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export interface SessionData {
  username: string;
  email: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: '',
  email: '',
  isLoggedIn: false,
};

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), {
    password: process.env.COOKIES_SECRET!,
    cookieName: 'session',

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
