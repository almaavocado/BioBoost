import React from 'react';
import clsx from 'clsx';

const TextInput = ({
  name, input, placeholder, type = null, className = '', header = true, handleMethod,
}) => (
  <>
    {header && <h3 className="mt-2">{name}</h3>}
    <input
      className={clsx(
        'mt-1 border-2 border-solid outline-slate-300 p-2 px-2 rounded-md',
        className,
      )}
      placeholder={placeholder}
      type={type || input.type}
      value={input.value}
      onChange={input.onChange}
      onKeyDown={handleMethod}
    />
  </>
);

export default TextInput;