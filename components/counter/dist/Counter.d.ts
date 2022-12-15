import { Dispatch, SetStateAction } from "react";
interface CounterProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}
export declare function Counter({ count, setCount }: CounterProps): JSX.Element;
export {};
