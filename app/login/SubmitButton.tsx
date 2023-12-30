import { UserPlus } from 'lucide-react';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-[#2c2e31] py-2 w-full rounded-lg hover:bg-[#d1d0c5] hover:text-gray-900 disabled:bg-red-400"
    >
      {pending && 'Submitting'}
      <span className="flex items-center justify-center gap-2">
        <UserPlus /> Sign Up
      </span>
    </button>
  );
}
