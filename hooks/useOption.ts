import { Options } from "@/common/type/form";
import { EFilter } from "@/common/type/base";
import useLangs from "./useLangs";

const useOption = () => {
  const { langs } = useLangs();

  const options: Options = {
    filter: [
      { label: langs?.common.options.newest ?? "", value: EFilter.NEWEST },
      { label: langs?.common.options.oldest ?? "", value: EFilter.OLDEST },
    ],
  };

  return options;
};

export default useOption;
