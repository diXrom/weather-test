import { ComponentPropsWithRef, FC, forwardRef, memo } from 'react';
import clsx from 'clsx';

import { inputErrorStyle, inputStyle } from './lib/styles';

interface IInput extends ComponentPropsWithRef<'input'> {
  error?: string;
}

const Input: FC<IInput> = forwardRef(
  ({ children, placeholder, type, className, error, ...props }, ref) => (
    <div className="relative flex flex-col">
      {children}
      <input
        ref={ref}
        autoComplete="on"
        type={type}
        className={clsx(inputStyle, className, error && inputErrorStyle, !children && '!px-3')}
        placeholder={error ? error : placeholder}
        {...props}
      />
    </div>
  )
);

export default memo(Input);
