import { UserPlus } from 'lucide-react';
import React from 'react';

export default function RegisterUser() {
  return (
    <div>
      <h2 className="mb-2">register</h2>
      <form>
        <input
          className="bg-[#2c2e31] text-gray-900 text-sm mb-2 rounded-lg block w-full p-2.5"
          placeholder="username"
        />
        <input
          type="email"
          className="bg-[#2c2e31] text-gray-900 text-sm mb-2 rounded-lg block w-full p-2.5"
          placeholder="email"
        />
        <input
          type="password"
          className="bg-[#2c2e31] text-gray-900 text-sm mb-2 rounded-lg block w-full p-2.5"
          placeholder="password"
        />
        <input
          type="password"
          className="bg-[#2c2e31] text-gray-900 text-sm mb-2 rounded-lg block w-full p-2.5"
          placeholder="confirm password"
        />
        <button className="bg-[#2c2e31] py-2 w-full rounded-lg hover:bg-[#d1d0c5] hover:text-gray-900">
          <span className="flex items-center justify-center gap-2">
            <UserPlus /> Sign Up
          </span>
        </button>
      </form>
    </div>
  );
}
