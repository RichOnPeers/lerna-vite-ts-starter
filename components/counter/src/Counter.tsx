import React, { Dispatch, SetStateAction } from 'react';

interface ICounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export function Counter({ count, setCount }: ICounterProps): JSX.Element {
  return (
    <p>
      <button onClick={() => setCount((count: number) => count + 1)}>count is: {count}</button>
    </p>
  );
}
