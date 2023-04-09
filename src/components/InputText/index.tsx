import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import { inputTextState } from "atoms/ui/counter";

const InputText: FunctionComponent = () => {
  const [inputText, setInputText] = useRecoilState(inputTextState);

  return (
    <div>
      <input type={"text"} value={inputText} onChange={(event) => setInputText(event.target.value)} />
    </div>
  );
};

export default InputText;
