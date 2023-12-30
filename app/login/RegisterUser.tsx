'use client';

import { UserPlus, X } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser } from '../_actions';
import { useFormStatus } from 'react-dom';
import SubmitButton from './SubmitButton';

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
};

export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    await registerUser(data);
    reset();
  };

  return (
    <div>
      <h2 className="mb-2">register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            className="bg-[#2c2e31] text-slate-300 text-sm mb-2 rounded-lg block w-full p-2.5"
            placeholder="username"
            defaultValue={''}
            {...register('username', { required: true })}
          />
          {errors.username?.type === 'required' && (
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
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          {(errors.email?.type === 'required' || errors.email?.type === 'pattern') && (
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
            {...register('password', { required: true, minLength: 6 })}
          />
          {(errors.password?.type === 'required' || errors.password?.type === 'minLength') && (
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
            {...register('confirmPass', {
              required: true,
              validate: (val: string) => {
                if (watch('password') != val) {
                  return false;
                }
              },
            })}
          />
          {(errors.confirmPass?.type === 'required' || errors.confirmPass?.type === 'validate') && (
            <p className="absolute right-2 top-2">
              <X color="#ca4754" />
            </p>
          )}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
