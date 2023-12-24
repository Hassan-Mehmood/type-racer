import { Crown, Keyboard, User } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <a href="/">
          <h1 className="white-text text-[1.8rem]">typeracer</h1>
        </a>
        <Keyboard size={18} color="#646669" className="cursor-pointer" />
        <Crown size={18} color="#646669" className="cursor-pointer" />
      </div>
      <div>
        <User color="#646669" className="cursor-pointer" />
      </div>
    </nav>
  );
}
