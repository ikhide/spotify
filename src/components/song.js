import React from 'react';
export default function Song({ src, title }) {
  return (
    <div className="mr-8">
      <div className="w-32 h-32 rounded-md">
        <img src={src} alt="" className="w-32 h-32 rounded-md" />
      </div>
      <span className="font-semibold">{title}</span>
    </div>
  );
}
