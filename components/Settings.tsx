import React from 'react';

// const SENTENCE_MODES = ['normal', 'punctuation', 'numbers'];
const SETTINGS = ['normal', 'punctuation', 'numbers', 'time', 'words'];

export default function Settings() {
  return (
    <div className="flex mx-auto bg-[#2c2e31] rounded-sm w-max py-2 px-3">
      {/* {SENTENCE_MODES.map((mode) => (
        <div key={mode} className="mx-2">
          {mode}
        </div>
      ))} */}
      {SETTINGS.map((setting) => (
        <div key={setting} className="mx-2 cursor-pointer text-sm text-[#646669]">
          {setting}
        </div>
      ))}
    </div>
  );
}
