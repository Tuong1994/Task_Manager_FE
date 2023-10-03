import commonEng from "./common";
import optionsEng from "./options";

const eng = {
  common: commonEng,
  options: optionsEng,
};

export type LangENG = typeof eng;

export default eng;
