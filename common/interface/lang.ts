import { LangENG } from "../lang/eng";
import { LangVN } from "../lang/vn";

export enum ELang {
  ENG = 1,
  VN = 2,
}

export type Langs = LangENG | LangVN | undefined;
