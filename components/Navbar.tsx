import { Crown, Keyboard, User } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-8 mb-8">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-2">
          <Keyboard color="#e2b714" />
          <h1 className="white-text text-[1.8rem]">typeracer</h1>
        </a>
        <div className="cursor-pointer">
          <Keyboard size={18} color="#646669" />
        </div>
        <div className="cursor-pointer">
          <Crown size={18} color="#646669" />
        </div>
      </div>
      <div>
        <User color="#646669" className="cursor-pointer" />
      </div>
    </nav>
  );
}
