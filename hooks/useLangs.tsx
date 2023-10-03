import { useAppSelector } from "@/redux/hooks";

const useLangs = () => {
  const { type, langs } = useAppSelector((state) => state.LangReducer);

  return { type, langs };
};

export default useLangs;
