import { FunctionComponent } from "react";
import { useSetRecoilState } from "recoil";
import { counterState } from "atoms/ui/counter";

const CounterButtons: FunctionComponent = () => {
  const setCounter = useSetRecoilState(counterState);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </div>
  );
};

export default CounterButtons;
