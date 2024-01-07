'use client'

import { X } from 'lucide-react';
import { useFormState } from 'react-dom';
import { loginUser } from '../_actions';
import LoginSubmitButton from './LoginSubmitButton';

export default function LoginUser() {
	const [state, formAction] = useFormState(loginUser, null);

	return (
		<div>
			<h2 className="mb-2">login</h2>
			<form action={formAction}>
				<div className="relative">
					<input
						type="email"
						className="bg-[#2c2e31] text-slate-300 text-sm mb-2 rounded-lg block w-full p-2.5"
						placeholder="email"
						defaultValue={''}
						name="email"
					/>
					{(state?.error?.email?._errors || state?.userNotExists) && (
						<p className="absolute right-2 top-2">
							<X color="#ca4754" />
						</p>
					)}
				</div>
				<div className="relative">
					<input
						type="password"
						className="bg-[#2c2e31] text-slate-300 text-sm mb-2 rounded-lg block w-full p-2.5"
						placeholder="password"
						defaultValue={''}
						name="password"
					/>
					{(state?.error?.password?._errors || state?.passwordNotMatch) && (
						<p className="absolute right-2 top-2">
							<X color="#ca4754" />
						</p>
					)}
				</div>
				<LoginSubmitButton />
			</form>
		</div>
	);
}
