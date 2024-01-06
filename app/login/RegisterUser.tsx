'use client';

import { X } from 'lucide-react';
import { registerUser } from '../_actions';
import { useFormState } from 'react-dom';

import RegisterSubmitButton from './RegisterSubmitButton';



export default function RegisterUser() {
	const [state, formAction] = useFormState(registerUser, null);

	return (
		<div>
			<h2 className="mb-2">register</h2>
			<form action={formAction}>
				<div className="relative">
					<input
						className="bg-[#2c2e31] text-slate-300 text-sm mb-2 rounded-lg block w-full p-2.5"
						placeholder="username"
						defaultValue={''}
						name="username"
					/>
					{(state?.error?.username?._errors || state?.usernameExists) && (
						<p className="absolute right-2 top-2">
							<X color="#ca4754" />
						</p>
					)}
				</div>

				<div className="relative">
					<input
						type="email"
						className="bg-[#2c2e31] text-slate-300 text-sm mb-2 rounded-lg block w-full p-2.5"
						placeholder="email"
						defaultValue={''}
						name="email"
					/>
					{(state?.error?.email?._errors || state?.emailExists) && (
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
					{state?.error?.password?._errors && (
						<p className="absolute right-2 top-2">
							<X color="#ca4754" />
						</p>
					)}
				</div>

				<div className="relative">
					<input
						type="password"
						className="bg-[#2c2e31] text-slate-300 text-sm mb-2 rounded-lg block w-full p-2.5"
						placeholder="confirm password"
						defaultValue={''}
						name="confirmPass"
					/>
					{state?.error?.confirmPass?._errors && (
						<p className="absolute right-2 top-2">
							<X color="#ca4754" />
						</p>
					)}
				</div>

				<RegisterSubmitButton />
			</form>
		</div>
	);
}
