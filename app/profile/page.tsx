import { getSession } from '@/lib/iron-session';
import { redirect } from 'next/navigation';

export default async function Profile() {
	const { isLoggedIn } = await getSession();

	if (!isLoggedIn) {
		redirect('/login');
	}

	return (
		<div>User Profile</div>
	)
}
