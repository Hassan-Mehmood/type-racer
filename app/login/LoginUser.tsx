import { LogIn } from 'lucide-react';

export default function LoginUser() {
  return (
    <div>
      <h2 className="mb-2">login</h2>
      <form>
        <input
          type="email"
          className="bg-[#2c2e31] text-gray-900 text-sm mb-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder="email"
        />
        <input
          type="password"
          className="bg-[#2c2e31] text-gray-900 text-sm mb-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder="password"
        />
        <button className="bg-[#2c2e31] py-2 w-full rounded-lg hover:bg-[#d1d0c5] hover:text-gray-900">
          <span className="flex items-center justify-center gap-2">
            <LogIn size={16} /> Sign In
          </span>
        </button>
      </form>
    </div>
  );
}
