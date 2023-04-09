import { atom, selector } from "recoil";
import persistAtom from "atoms/utils/persist";

const counterState = atom<number>({
  key: "ui/counter/counter",
  default: 0,
  effects: [persistAtom],
});

const inputTextState = atom<string>({
  key: "ui/counter/inputText",
  default: "",
  effects: [persistAtom],
});

const counterAndTextState = selector<string>({
  key: "ui/counter/counterAndText",
  get: ({ get }) => {
    const counter = get(counterState);
    const inputText = get(inputTextState);

    return `${inputText}: ${counter}`;
  },
});

export { counterState, inputTextState, counterAndTextState };
