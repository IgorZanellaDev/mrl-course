import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil/course",
});

export default persistAtom;
