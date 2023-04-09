import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [queryParams] = useSearchParams();

  return Object.fromEntries([...queryParams]);
};

export default useQueryParams;
