import React from 'react';

export const Ul = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="space-y-2 list-disc px-4 text-sm mb-6 leading-6">
      {children}
    </ul>
  );
};
