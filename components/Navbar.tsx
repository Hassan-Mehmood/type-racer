import { logout } from '@/app/_actions';
import { getSession } from '@/lib/iron-session';
import { Crown, Keyboard, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default async function Navbar() {
	const session = await getSession();

	return (
		<nav className="flex justify-between items-center pt-8 mb-8">
			<div className="flex items-center gap-4">
				<Link href="/" className="flex items-center gap-2">
					<Keyboard color="#e2b714" />
					<h1 className="white-text text-[1.8rem]">typeracer</h1>
				</Link>
				<div className="cursor-pointer">
					<Keyboard size={18} color="#646669" />
				</div>
				<div className="cursor-pointer">
					<Crown size={18} color="#646669" />
				</div>
			</div>

			{session?.isLoggedIn ? (
				<div className='flex items-center gap-4'>
					<Link href={''} className='flex items-center gap-1 cursor-pointer'>
						<User color="#646669" />
						<p className='text-[#646669] text-sm'>{session?.username}</p>
					</Link>
					<form action={logout}>
						<button type='submit'>
							<LogOut size={18} color="#646669" />
						</button>
					</form>
				</div>
			) : (
				<div>
					<Link href={'/login'}>
						<User color="#646669" className="cursor-pointer" />
					</Link>
				</div>
			)}
		</nav>
	);
}
