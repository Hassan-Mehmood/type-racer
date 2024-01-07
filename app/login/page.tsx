import React from 'react';
import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';
import { getSession } from '@/lib/iron-session';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
	const { isLoggedIn } = await getSession();

	if (isLoggedIn) {
		redirect('/profile');
	}

	return (
		<div className="flex justify-around">
			<RegisterUser />
			<LoginUser />
		</div>
	);
}
