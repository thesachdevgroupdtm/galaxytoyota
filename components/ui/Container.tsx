
import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-4 md:px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
};
