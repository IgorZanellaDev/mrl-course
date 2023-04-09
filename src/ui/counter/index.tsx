import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { counterAndTextState } from "atoms/ui/counter";
import CounterButtons from "components/CounterButtons";
import InputText from "components/InputText";

const Counter: FunctionComponent = () => {
  const inputAndText = useRecoilValue(counterAndTextState);

  return (
    <div>
      <span>{inputAndText}</span>
      <CounterButtons />
      <InputText />
    </div>
  );
};

export default Counter;
