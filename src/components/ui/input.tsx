import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'h-11 w-full rounded-xl bg-white/5 border border-white/10 px-4 text-sm outline-none focus:ring-2 focus:ring-white/20',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
